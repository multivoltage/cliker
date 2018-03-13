import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

var link = process.env.ADFLY_URL_ENV;

fixture `experiemnt adfly click`// declare the fixture
    .page `${link}`;  // specify the start page

test('experiemnt adfly click', async t => {
 
    await t
        .wait(5000);

    const btn = await Selector('.mwButton[href]');
    
    await t
        .click(btn)
        .wait(10000);
        
})