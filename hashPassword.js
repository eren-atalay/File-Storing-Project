import bcrypt from 'bcrypt';

const plainPassword = 'eren123test'; // The plain-text password you want to hash

bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
    if (err) {
        console.error('Error hashing password:', err.message);
        return;
    }
    console.log('Manually hashed password:', hashedPassword);
});