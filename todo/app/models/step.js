var Step = function () {

    this.defineProperties({
        title: {type: 'string', required: true},
        description: {type: 'string'},
        text: {type: 'string'},
        status: {type: 'string'}
    });

    /*
     this.property('login', 'string', {required: true});
     this.property('password', 'string', {required: true});
     this.property('lastName', 'string');
     this.property('firstName', 'string');

     this.validatesPresent('login');
     this.validatesFormat('login', /[a-z]+/, {message: 'Subdivisions!'});
     this.validatesLength('login', {min: 3});
     // Use with the name of the other parameter to compare with
     this.validatesConfirmed('password', 'confirmPassword');
     // Use with any function that returns a Boolean
     this.validatesWithFunction('password', function (s) {
     return s.length > 0;
     });

     // Can define methods for instances like this
     this.someMethod = function () {
     // Do some stuff
     };
     */

    // validation
    this.validatesPresent('title');
    this.validatesLength('title', {min: 5});

    this.validatesWithFunction('status', function (status) {
        return status == 'open' || status == 'done';
    }, {message: "status needs to be 'open' or 'done'."});


    // association
    this.belongsTo('Todo');

};

/*
 // Can also define them on the prototype
 Step.prototype.someOtherMethod = function () {
 // Do some other stuff
 };
 // Can also define static methods and properties
 Step.someStaticMethod = function () {
 // Do some other stuff
 };
 Step.someStaticProperty = 'YYZ';
 */

Step = geddy.model.register('Step', Step);
