// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const venuesRouter = require('./venues.js');
const groupsRouter = require('./groups.js');
const eventsRouter = require('./events.js');
const membersRouter = require('./members.js');
const attendeesRouter = require('./attendees.js');


const { restoreUser } = require('../../utils/auth.js');


router.post('/test', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
    res.json({ requestBody: req.body });
  });

const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models/index.js');

router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
      where: {
        username: 'Breakfast'
      }
    });
    setTokenCookie(res, user);
    
    return res.json({ user: user });
  });

// GET /api/restore-user
router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/groups', groupsRouter);
router.use('/venues', venuesRouter);
router.use('/events', eventsRouter);
router.use('/members', membersRouter);
router.use('/attendees', attendeesRouter);


router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });



module.exports = router;
