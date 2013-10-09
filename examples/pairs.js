process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    process.stdout.write( input );
   /* var K = input.K,
        N = input.N,
        count = 0;
    
    for ( var c = 0; c < N; c += 1 ) {
      for ( var i = ( c+1 ); i < N;  i += 1 ) {
        if( input[c] - input[i] == K || input[c] - input[i] == -K ) {
          count += 1;
        }
      }
    }*/    
    process.exit();
});
