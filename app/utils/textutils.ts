export function replaceAr(str) {

    var find = ['0','1','2','3','4','5','6','7','8','9']
    var replace = ['۰','۱','۲','۳','٤','۵','٦','۷','۸','۹']
    for (var i = 0; i < find.length; i++) {
      str = str.toString().replace(new RegExp(find[i],"g"), replace[i])
    }
  
    return str
}
  