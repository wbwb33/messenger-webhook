const moment = require('moment');
const service = require('./db_manager/service_internal');

module.exports = async function App(context) {
  let output;

  if (context.event.isText) {
    const input = context.event.text;
    const uniqueId = context._session.id;
    service.create(input,uniqueId);

    let state = context.state;
    
    /** final state */
    if (state.asking == "counter-till-birthday") {
      let yesSynonim = ["yes","yeah","sure","ok","yep"];
      if(yesSynonim.some(w => input.toLowerCase().includes(w))) {
        const dateNow = moment();
        const yearNow = dateNow.year();
        const dateWithYearNow = moment(state.birthday).year(yearNow);

        let counter = dateWithYearNow.diff(dateNow, 'days');

        if(counter<0) counter = dateWithYearNow.year(yearNow+1).diff(dateNow, 'days');
        output = `There are ${counter} days left until your next birthday`;
      } else {
        output = "Goodbye 👋";
      }
      state.asking = null;

    /** state asking counter until user's birthday */
    } else if (state.asking == "birthday") {
      const isValid = input.match(/^\d{4}([-])\d{2}\1\d{2}$/);
      if(isValid) {
        state.birthday = input;
        state.asking = "counter-till-birthday";
        output = "Do you want to know how many days until your birthday?";
      } else {
        output = "I'm sorry, i can't find your birthday. Please, kindly use this format, YYYY-MM-DD.";
      }

    /** state asking birthday */
    } else if (state.asking == "name") {
      state.firstName = input;
      state.asking = "birthday";
      output = `Hello ${input}. When is your birthday?`;

    /** state asking name */
    } else {
      context.resetState();
      state = { asking: "name" };
      output = "Hi, Tell me your first name?";
    }

    await context.setState(state);

  } else {
    output = `Uh oh, sorry i can't understand input other than words. Please use words only to chat with me.`;
  }

  await context.sendText(output);
};
