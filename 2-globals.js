// globals -- no window

// __dirname => path to current directory
// __filename => file name
// require => function to use modules(commonjs)
// module => info about current module (file)
// process => info about env where the program is being excuted

console.log(__dirname);
console.log(__filename);


setInterval(()=>{
    console.log("hello world");
},1000)