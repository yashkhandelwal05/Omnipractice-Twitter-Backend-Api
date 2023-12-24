async function launchServer(app) {
   const port = 3040;
   app.listen(port, () => {
     console.log(`Server started on port ${port}`);
   });
}



module.exports = { launchServer };