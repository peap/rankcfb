describe('Rankings E2E tests:', function() {
    describe('New rankings page', function() {
        it('Should not be able to create a new ranking', function() {
            browser.get('http://localhost:3000/#!/rankings/create');
            element(by.id('create-ranking')).click();
            element(by.binding('error')).getText().then(function(errorText) {
                expect(errorText).toBe('User is not logged in.');
            });
        });
    });
});
