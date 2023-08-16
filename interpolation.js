// Interpolation makes it easy for us create message templates and fill in the values!

// For instance, we could write an email:

const recipient = "Neo";
const sender = "Morpheus";

// we'll interpolate these names
// into this email message:
const email = `
To ${recipient},

Red pill or blue pill? 

${sender}`;
