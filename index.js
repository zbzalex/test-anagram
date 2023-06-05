function find_ana(src, dst) {
  if (src.length !== dst.length) return false
  const src_a = src.split('')
  const dst_a = dst.split('')
  
  let i   = 0
  for ( ; i < dst_a.length ; i++ ) {
    if (!src_a.includes(dst_a[i])) {
      return false
    }
  }
  
  return true
}

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';
const result = str.split(' ').reduce((acc, cur) => {
  let flg = false
  let i = 0
  for ( ; i < acc.length; i++) {
    const grp = acc[i]
    
    if (find_ana(grp[0], cur)) {
      grp.push(cur)
      flg = true
    }
  }
  
  if (!flg) {
    acc.push([cur])
  }
  
  return acc
}, [])

console.log(result) // [["адрес", "среда"], ["карп", "парк"], ["кума", "мука"], ["куст", "стук"], ["мир", "рим"], ["рост", "сорт", "трос"]]
