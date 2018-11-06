describe("Test Song Methods", function () {
    let Player = require('../../lib/jasmine_examples/Player');
    let Song = require('../../lib/jasmine_examples/Song');
    let player;
    let song;
    let shitSong
    let otherSong
    let otherSong2
    let otherSong3

    beforeEach(function () {
        player = new Player();
        song = new Song("Cool", "Best101", "Tom");
        shitSong = new Song("Shit", "Best101", "Tom");
        otherSong = new Song("Cooler", "Best101", "Tom")
        otherSong2 = new Song("notCool", "worst69", "Tom")
        otherSong3 = new Song("notCool", "worst69", "Tom")
    })

    it("should be able to get description of the Song", function () {
        expect(song.getDescription()).toEqual(`The name of this song is Cool and it is from the album Best101. It is written by Tom`);
    });

    it("should be able to get description of the Song", function () {
        expect(song.getDescription()).not.toEqual(`The name of this song is Shit and it is from the album Shit. It is written by Shit`);
    });

    it("check if two song are in the same album", function () {
        expect(song.isInSameAlbum(otherSong)).toBeTruthy();
    });

    it("check if two song are in the same album", function () {
        expect(song.isInSameAlbum(otherSong2)).toBeFalsy();
    });

    it("check if two song are in the same album", function () {
        expect(song).toBeInTheSameAlbumAs(shitSong);
    });

    it("check if two song are written by same author, are in the same album and with the same name but two different song objects", function () {
        expect(otherSong2.name).toBe(otherSong3.name);
        expect(otherSong2.album).toBe(otherSong3.album);
        expect(otherSong2.author).toBe(otherSong3.author);
    });

    it("check if two song are written by same author, are in the same album and with the same name but two different song objects", function () {
        expect(otherSong2).toEqual(otherSong3);
    });

})