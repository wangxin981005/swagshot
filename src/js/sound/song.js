const BEAT_PATTERN = {
    "n": [
        137,
        0,
        139,
        0,
        137,
        0,
        0,
        139,
        0,
        0,
        137,
        0,
        0,
        139,
        0,
        0,
        137,
        0,
        139,
        0,
        137,
        0,
        0,
        139,
        0,
        0,
        137,
        0,
        0,
        139,
        0,
        0
    ]
};

const AGGRESSIVE_PATTERN = {
    "n": [
        137,
        139,
        137,
        0,
        137,
        139,
        137,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        137,
        139,
        137,
        0,
        137,
        139,
        137,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
};

const HIHAT = {
    "osc1_oct": 8,
    "osc1_det": 0,
    "osc1_detune": 0,
    "osc1_xenv": 0,
    "osc1_vol": 0,
    "osc1_waveform": 0,
    "osc2_oct": 8,
    "osc2_det": 0,
    "osc2_detune": 0,
    "osc2_xenv": 0,
    "osc2_vol": 0,
    "osc2_waveform": 0,
    "noise_fader": 60,
    "env_attack": 50,
    "env_sustain": 419,
    "env_release": 4607,
    "env_master": 130,
    "fx_filter": 1,
    "fx_freq": 10332,
    "fx_resonance": 120,
    "fx_delay_time": 4,
    "fx_delay_amt": 16,
    "fx_pan_freq": 5,
    "fx_pan_amt": 108,
    "lfo_osc1_freq": 0,
    "lfo_fx_freq": 0,
    "lfo_freq": 5,
    "lfo_amt": 187,
    "lfo_waveform": 0,
    "p": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ],
    "c": [BEAT_PATTERN]
};

const DRUM = {
    "osc1_oct": 7,
    "osc1_det": 0,
    "osc1_detune": 0,
    "osc1_xenv": 1,
    "osc1_vol": 255,
    "osc1_waveform": 0,
    "osc2_oct": 7,
    "osc2_det": 0,
    "osc2_detune": 0,
    "osc2_xenv": 1,
    "osc2_vol": 255,
    "osc2_waveform": 0,
    "noise_fader": 0,
    "env_attack": 50,
    "env_sustain": 150,
    "env_release": 4800,
    "env_master": 200,
    "fx_filter": 2,
    "fx_freq": 600,
    "fx_resonance": 254,
    "fx_delay_time": 0,
    "fx_delay_amt": 0,
    "fx_pan_freq": 0,
    "fx_pan_amt": 0,
    "lfo_osc1_freq": 0,
    "lfo_fx_freq": 0,
    "lfo_freq": 0,
    "lfo_amt": 0,
    "lfo_waveform": 0,
    "p": [
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0
    ],
    "c": [BEAT_PATTERN]
};

const SNARE = {
    "osc1_oct": 8,
    "osc1_det": 0,
    "osc1_detune": 0,
    "osc1_xenv": 1,
    "osc1_vol": 82,
    "osc1_waveform": 2,
    "osc2_oct": 8,
    "osc2_det": 0,
    "osc2_detune": 0,
    "osc2_xenv": 0,
    "osc2_vol": 0,
    "osc2_waveform": 0,
    "noise_fader": 255,
    "env_attack": 100,
    "env_sustain": 0,
    "env_release": 9090,
    "env_master": 232,
    "fx_filter": 3,
    "fx_freq": 5200,
    "fx_resonance": 63,
    "fx_delay_time": 0,
    "fx_delay_amt": 0,
    "fx_pan_freq": 0,
    "fx_pan_amt": 0,
    "lfo_osc1_freq": 0,
    "lfo_fx_freq": 0,
    "lfo_freq": 0,
    "lfo_amt": 0,
    "lfo_waveform": 0,
    "p": [
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    "c": [AGGRESSIVE_PATTERN]
};

const ELECTRO = {
    "osc1_oct": 6,
    "osc1_det": 0,
    "osc1_detune": 0,
    "osc1_xenv": 0,
    "osc1_vol": 192,
    "osc1_waveform": 1,
    "osc2_oct": 8,
    "osc2_det": 0,
    "osc2_detune": 8,
    "osc2_xenv": 0,
    "osc2_vol": 82,
    "osc2_waveform": 2,
    "noise_fader": 0,
    "env_attack": 100,
    "env_sustain": 4545,
    "env_release": 2727,
    "env_master": 192,
    "fx_filter": 3,
    "fx_freq": 2700,
    "fx_resonance": 85,
    "fx_delay_time": 6,
    "fx_delay_amt": 60,
    "fx_pan_freq": 6,
    "fx_pan_amt": 86,
    "lfo_osc1_freq": 0,
    "lfo_fx_freq": 1,
    "lfo_freq": 7,
    "lfo_amt": 106,
    "lfo_waveform": 0,
    "p": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0

    ],
    "c": [BEAT_PATTERN]
};


const SONG_BASE = {
    "rowLen": 5513,
    "endPattern": 14,
    "songData": [HIHAT, DRUM, SNARE, ELECTRO],
    "songLen": 50
};




// songGen.getAudioGenerator(function(audioGenerator) {
//     var audio = audioGenerator.getAudio();
//     audio.loop = true;
//     audio.play();
//
//     audio.onend = () => {
//         console.log('end audio');
//     };
// });

const songGen = new MusicGenerator(SONG_BASE);
songGen.createAudioBuffer(buffer => {
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const gainNode = audioCtx.createGain();
    // gainNode.gain.value = 0.1;
    gainNode.connect(audioCtx.destination);

    source.connect(gainNode);

    source.start();

    source.onended = function() {
        console.log('end');
    };
});