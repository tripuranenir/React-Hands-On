function Hello(){
  let myname='Rohit';
  let fuillname=()=>{return 'Rohit Tripuraneni';}
  return <h3>This is the hello component {fuillname()}</h3>;
}
export default Hello;