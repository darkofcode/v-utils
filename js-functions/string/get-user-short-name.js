import { cleanName } from "./clean-name";

const getUserShortName = (name) => {
  const _name = cleanName(String(name));
  if (_name.length <= 2) return _name.toLocaleUpperCase();
  const names = _name.split(" ");
  const first = names[0];
  const last = names.length > 1 ? names[names.length - 1] : first[1];

  return `${first[0]}${last[0]}`.toLocaleUpperCase();
};

// console.log(`from short name:`, getUserShortName("f"));
// console.log(`from short name:`, getUserShortName("fa"));
// console.log(`from short name:`, getUserShortName("f aer ae   aser ser    "));
// console.log(`from short name:`, getUserShortName("  ffa e    "));
// console.log(`from short name:`, getUserShortName("  gf asera aer ta    "));
// console.log(`from short name:`, getUserShortName(" uf asera ra"));

export { getUserShortName };
