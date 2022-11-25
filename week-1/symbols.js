const id = Symbol('Uniek');
const uid = Symbol('Uniek');
const firstName = 'Adriaan';
const user = 'Adriaan';

// Statussen: OPEN, GESLOTEN, VOLZET
const statuses = {
    OPEN: Symbol('Open'),
    CLOSED: Symbol('Open'),
    FULL: Symbol('Volzet')
};

const currentStatus = statuses.CLOSED;
const requiredStatus = statuses.OPEN;

if (currentStatus === requiredStatus) {
    console.log('The form submissions are open');
}