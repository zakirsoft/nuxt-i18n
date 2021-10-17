/* eslint-disable */
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
import {
  required,
  alpha_spaces as alphaSpaces,
  min,
  max,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('email', email);
    defineRule('password_missmatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is to short.`,
          max: `The field ${ctx.field} is to long.`,
          alpha_spaces: `The field ${ctx.field} may contain only alphabetical characters and..`,
          email: `The field ${ctx.field} must be valid email.`,
          min_value: `The ${ctx.field} is too low.`,
          max_value: `The ${ctx.field} is too high.`,
          excluded: `You  are not alowed to use this value for the field ${ctx.value}.`,
          country_excluded:
            'Due to restrictions in your region, we cant accept you as a user',
          password_missmatch: `The passwords don't match.`,
          tos: 'You must accept the Terms of Service.',
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${context.field} isn't valid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: false,
      validateOnInput: false,
      validateOnModelUpdate: false,
    });
  },
};
