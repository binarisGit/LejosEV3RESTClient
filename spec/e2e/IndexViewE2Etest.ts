describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('http://localhost:63342/AngularJsHttpIntegrationTests/index.html');

        element(by.id('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('#rotateLeftButton')).click();

        expect(completedAmount.count()).toEqual(2);
    });
});