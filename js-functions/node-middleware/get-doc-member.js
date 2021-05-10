import { isEmpty } from "../object/is-empty";

/**
 *
 * @param {{}} doc
 * @param {string[]} membersKey
 * @return {any[]}
 */
const getDocMember = (doc, membersKey) => {
  if (isEmpty(doc)) return [];
  let membersCols = [];
  membersKey.forEach((k) => {
    let member = doc[k];
    if (!isEmpty(member)) {
      // member = typeof iteratorFnc === "function" ? iteratorFnc(member) : member;
      // console.log(`from doc member`, member);
      if (member !== undefined && member !== "") {
        if (Array.isArray(member)) {
          membersCols = [...membersCols, ...member];
        } else {
          membersCols.push(member);
        }
      }
    }
  });
  // console.log(`from get doc member`, membersCols);
  return membersCols;
};

export { getDocMember };
