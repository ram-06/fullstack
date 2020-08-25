var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var samplerouter = require('./routes/sample');
var loginRouter = require("./routes/loginValidation");
var loadProductDataRouter = require("./routes/loadPoductData");
var userloggedin = require("./routes/isUserLoggedIn");
var sendMailRouter = require("./routes/sendMail");
var uploadDataRouter = require("./routes/uploadRegisterDetails");
var uploadUserPic = require("./routes/uploadUserPic");

var empRouter = require("./routes/employeeDetails");
var addProduct = require('./routes/addNewProduct');

var newSignupRouter = require("./routes/newSignup");

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var multer = require("multer");

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
     filename = file.fieldname + '-' + Date.now() + '.jpg';
    callback(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});

var upload = multer({ storage : storage}).single('prodImage');

app.post('/uploadProfilePicture',function(req,res){
    upload(req, res, function(err) {
        if(err) {
          console.log(err);
            return res.end("Error uploading file.");
        }
        var data = {
          msg: "success",
          imageUrl: '/uploads/' + filename
        }
        res.send(JSON.stringify(data));
    });
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'india',
  resave: false,
  saveUninitialized: true
}));



app.use('/test', indexRouter);
app.use('/users', usersRouter);
app.use('/sample/data/xyz',  samplerouter );
app.use("/application/loginValidation", loginRouter);
app.use("/data/productDetails"  , loadProductDataRouter);
app.use("/data/addNewProduct"  , addProduct);
app.use("/user/loginstatus"  , userloggedin);
app.use("/user/newSignup", newSignupRouter);
app.use("/get/empdetails", empRouter);
app.use('/sendmail', sendMailRouter);
app.use('/uploadData', uploadDataRouter);
app.use('/uploadUserPic', uploadUserPic);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("usermsg", function(data){
    console.log("data received");
    console.log(data);
    socket.broadcast.emit("receivedata", data);
  });
});

server.listen(8081, function(){
  console.log("server is listing at 8081");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
