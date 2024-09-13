const express = require('express');
const router = express.Router();


// Import your controller functions
const {
    index,
    explore,
    team,
    about,
    cubical_realm,
    giga_gen,
    beatbots,
    OptiML,
    ss,

    reg,

    regPost,
    payment

} = require('../controllers/views')

// Define routes for general pages
router.get('/', index);
router.get('/explore', explore);
router.get('/team', team);
router.get('/about_dept', about);

// Route for registration
router.get('/reg', reg);


// Define routes for event pages
router.get('/templates/cubical_realm', cubical_realm);
router.get('/templates/giga_gen', giga_gen);
router.get('/templates/beat_bots', beatbots);
router.get('/templates/opti_ml', OptiML);
router.get('/templates/startup_mela', ss);

router.post('/payment', payment);

// router.post('/reg',regPost);

// Export the router
module.exports = router;

/*

const multer = require('multer');

// Multer setup for file uploads (for the payment screenshot)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save screenshots in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Use timestamp to avoid duplicate names
    }
});

const upload = multer({ storage: storage });



// POST route for handling form submission with dynamic team members
router.post('/payment', upload.single('screenshot'), async (req, res) => {
    try {
        // Extract form data
        const { name, event, branch, year, email, contact, team_size, transaction_id, amount } = req.body;

        // Extract team member details from the form (assuming multiple team members are sent)
        const team_members = [];
        for (let i = 0; i < team_size - 1; i++) {
            // Push each team member's details into the array
            team_members.push({
                name: req.body['team_member_name_${i}'],
                email: req.body['team_member_email_${i}'],
                phone: req.body['team_member_phone_${i}'],
                branch: req.body['team_member_branch_${i}'],
                year: req.body['team_member_year_${i}']
            });
        }
        // Call the payment controller (or handle the logic directly here)

        // Redirect to success or return a success message
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});
*/