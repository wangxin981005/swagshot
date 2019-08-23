soundPool = (instrument, baseNote, poolSize = 1) => {
    let index = 0;
    const sounds = [...Array(poolSize)].map(() => prepareSound(instrument, baseNote));

    return () => sounds[index++ % sounds.length]();
};

prepareSound = (instrument, note) => {
    let buffer;

    new SoundGenerator(instrument).createAudioBuffer(note, x => {
        buffer = x;
    });

    return () => {
        if (buffer) {
            const source = audioCtx.createBufferSource();
            source.buffer = buffer;
            source.connect(audioCtx.destination);
            source.start();
        }
    };
};

const pistolSound = soundPool(PISTOL_INSTRUMENT, 151, 10),
    damageSound = soundPool(DAMAGE_INSTRUMENT, 99, 5),
    itemSound = soundPool(ITEM_INSTRUMENT, 159, 2),
    explosionSound = soundPool(EXPLOSION_INSTRUMENT, 187, 2),
    rocketSound = soundPool(ROCKET_INSTRUMENT, 183, 2);
