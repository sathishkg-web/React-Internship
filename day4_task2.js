for (let i = 1; i < 100; i++) {
  let output =i;

  if (i % 3 == 0) {
    output = "bestenlist";
  }
  if (i % 5 == 0) {
    output = "react";
  }
  if (i%3==0 && i%5==0){
    output="bestenlistreact";
  }
  console.log(output);
}
