//Students = new Mongo.Collection("students");

Schemas = {};

if (Meteor.isClient) {
    Template.registerHelper("Schemas", Schemas);
}

Schemas.student = new SimpleSchema({
    "profile.firstName": {
        type: String,
        autoform: {
            afFieldInput: {
                class: 'text-input'
            }
        },
        max: 200
    },
    "profile.lastName": {
        type: String,
        autoform: {
            afFieldInput: {
                class: 'text-input'
            }
        }
    },
    email: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "email",
                class: 'text-input'
            }
        },
        min: 0
    },
    "profile.userName": {
        type: String,
        autoform: {
            afFieldInput: {
                class: 'text-input'
            }
        },
        min: 0
    },
    "password": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "password",
                class: 'text-input'
            }
        }
    },
    "profile.phone": {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                class: 'text-input'
            }
        }
    },
    "profile.school": {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                class: 'text-input'
            }
        }
    },
    "profile.instrument": {
        type: String,
        autoform: {
            type: "select",
            afFieldInput: {
                class: 'text-input'
            },
            options: function () {
                return [
                    {label: "Select an instrument", value: "null", disabled:true},
                    {label: "Violin", value: "Violin"},
                    {label: "Viola", value: "Viola"},
                    {label: "Cello", value: "Cello"},
                    {label: "Double Bass", value: "Double Bass"}
                ];
            }
        }
    },
    "profile.country": {
        type: String,
        autoform: {
            afFieldInput: {
                class: 'text-input'
            }
        }
    },
    "profile.city": {
        type: String,
        autoform: {
            afFieldInput: {
                class: 'text-input'
            }
        }
    },
    "profile.state": {
        type: String,
        min: 2,
        autoform: {
            afFieldInput: {
                class: 'text-input',
                maxLength:2
            }
        }
    },
    "profile.parentEmail": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "email",
                class: 'text-input'
            }
        }
    },
    "profile.privateTeacher": {
        type: Boolean,
        optional: true,
        label: "I have a private teacher"
    },
    "profile.heardFrom": {
        type: String,
        optional: true,
        label: "How did you hear about us?",
        autoform: {
            type: "select",
            afFieldInput: {
                class: 'text-input'
            },
            options: function () {
                return [
                    {label: "How did you hear about us?", value: "null", disabled:true},
                    {label: "Teacher", value: "Teacher"},
                    {label: "Friend", value: "Friend"},
                    {label: "Facebook", value: "Facebook"},
                    {label: "Twitter", value: "Twitter"},
                    {label: "Instagram", value: "Instagram"},
                    {label: "Search engine", value: "Search engine"},
                    {label: "Advertisement", value: "Advertisement"},
                    {label: "Music store", value: "Music store"}
                ];
            }
        }
    }
});


var Collections = {};

if (Meteor.isClient) {
    Template.registerHelper("Collections", Collections);
    studentContext = Schemas.student.namedContext("studentSignup");
}
Students = Collections.Students = new Mongo.Collection("students");
Students.attachSchema(Schemas.student);