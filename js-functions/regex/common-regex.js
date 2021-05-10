/*
// syntax
var re = /pattern/flags;
var re = new RegExp("pattern", "flags");
i.e 
var re = /\w+\s/g;
var myRe = new RegExp('d(b+)d', 'g');
*/
const regex = {
  digit: "^[0-9]+$",
  alphabet: "^[a-zA-Z]+$",
  alphaNumeric: "^[a-zA-Z0-9]+$",
  email: "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$",
  //must contain one lowercase letter, one uppercase letter, one number, one unique character such as !@#$%^&? and be at least 6 characters long
  password: "^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$",
  url:
    "((([A-Za-z]{3,9}:(?://)?)(?:[-;:&=+$,w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,w]+@)[A-Za-z0-9.-]+)((?:/[+~%/.w-_]*)???(?:[-+=&;%@.w_]*)#?(?:[w]*))?)",
  webSite: "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)",
};

export { regex };
