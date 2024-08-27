function groupAnagrams(strArray) {

    let groups = {};  
    for (let i=0; i < strArray.length; i++) {
      let str = strArray[i].split('').sort().join('');
      if (str in groups) {
        groups[str].push(strArray[i]);
      } else {
        groups[str] = [];
        groups[str].push(strArray[i]);
      }
    }  
    return Object.values(groups);
  }
  
  let strs = ["eat","tea","tan", "ate", "nat", "bat"];
  console.log(groupAnagrams(strs))
  
  strs = [""]
  console.log(groupAnagrams(strs))
  
  strs = ["a"]
  console.log(groupAnagrams(strs))
  
  strs = ["eat", "tea", "ate"]
  console.log(groupAnagrams(strs))
  