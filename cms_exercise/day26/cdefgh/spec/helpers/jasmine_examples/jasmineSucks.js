beforeEach(function () {
    jasmine.addMatchers({
        toBeInTheSameAlbumAs: function () {
            return {
                compare: function (actual, expected) {
                    var song = actual;
                    var song2 = expected
                    var passed = (song.album == song2.album)
                    return {
                        pass: passed,
                        message: "Two albums are the same"
                    }
                }
            };
        }
    });
});