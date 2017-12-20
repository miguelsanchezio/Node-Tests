const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res)
                .toBe(44)
                .toBeA('number');
        });

        it('should async add two numbers', done => {
            utils.asyncAdd(4, 3, sum => {
                expect(sum)
                    .toBe(7)
                    .toBeA('number');
                done();
            });
        });
    })

    it('should square a number', () => {
        var res = utils.square(9);
        expect(res)
            .toBe(81)
            .toBeA('number');
    });
    
    it('should async square a number', done => {
        utils.asyncSquare(9, square => {
            expect(square)
                .toBe(81)
                .toBeA('number');
            done();
        });
    });

    it('should be object and include firstName and lastName', () => {
        var user = utils.setName({}, 'Miguel Sanchez');
        expect(user)
            .toInclude({ firstName: 'Miguel', lastName: 'Sanchez' })
            .toBeA('object');
    });
})



// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: 'miguel'}).toNotEqual({name: 'Miguel'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Miguel',
//         age: 23,
//         location: 'Orange County'
//     }).toExclude({
//         age: 21
//     });
// });


