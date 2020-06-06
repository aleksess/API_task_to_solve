var express = require('express');
var router = express.Router();

let Events = [
    {
        title: 'Event_A',
        date_start: '30-11-2020',
        date_end: '03-12-2020'
    },
    {
        title: 'Event_B',
        date_start: '01-12-2020',
        date_end: '02-02-2020'
    },
    {
        title: 'Event_C',
        date_start: '01-12-2020',
        date_end: '03-02-2020'
    }

]

let registrations = []

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});



router.post('/sign', (req, res) => {
    const body = req.body

    const checkFunc = Element => Element.title === body.Event
    const checkRegistrations =  Element => Element.Name === body.Name
    const checkRegistrations2 = Element => Element.LastName === body.LastName
    const checkRegistrations3 = Element => Element.Event === body.Event

    

    let filteredEvents = Events.filter(checkFunc)
    console.log(filteredEvents)



    if (!(Array.isArray(filteredEvents) && filteredEvents.length)){
        res.send({code: 400, message: 'There\'s no such event'})
    }
    else  {
        
        let filteredRegistrations1 = registrations.filter(checkRegistrations)
        let filteredRegistrations2 = filteredRegistrations1.filter(checkRegistrations2)
        let filteredRegistrations3 = filteredRegistrations2.filter(checkRegistrations3)
        console.log('filtered regs1: ', filteredRegistrations1)
        console.log('filtered regs2: ', filteredRegistrations2)
        console.log('filtered regs3: ', filteredRegistrations3)
        if (Array.isArray(filteredRegistrations3) && filteredRegistrations3.length){
            res.send({code: 400, message: 'You have already registered for this event'})
        } else {
            const registration = {
                Name: body.Name,
                LastName: body.LastName,
                Event: body.Event,
                Code: randomInt(100, 90000)
            }
            registrations.push(registration)
            console.log(registrations)
            res.send({code: 200, message: `Thank you for registering. Your management code is ${registration.Code}. Remember it or write in your secret place.`})
        }

    }

    
    
})

module.exports = router;