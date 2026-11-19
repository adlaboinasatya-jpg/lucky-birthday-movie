/**
 * THE BIRTHDAY CINEMATIC MOVIE - ENGINE SCRIPT
 * Starring: LEELA - "The Most Special Person"
 * Full 22-Scene Cinematic Movie Experience across 5 Chapters
 * Original Soundtrack: "Inthandham" (Sita Ramam)
 */

(function () {
  'use strict';

  // ==========================================================================
  // DEFAULT CONFIGURATION & 22 SCENES DATA
  // ==========================================================================
  const DEFAULT_CONFIG = {
    recipientName: "Leela",
    birthdayDate: "November 23, 2026",
    directorName: "With All My Heart",
    finaleTagline: "To the most radiant soul who brings warmth and starlight into every day: May your life be filled with endless joy, magic, and sweet miracles!",
    letterContent: `Dearest Leela,

If life were a movie, you would be every breathtaking frame, every unforgettable scene, and the warmth in every melody.

From holding a flower in the golden sunlight to laughing barefoot on the grass, you bring a kind of effortless magic that turns ordinary moments into cinematic gold. Your kindness is rare, your smile is infectious, and your gentle heart makes this world infinitely more beautiful.

Just like the song "Inthandham", your grace and innocence are timeless. You don't just walk into a room — you light it up with pure sunshine.

On this special birthday, I wish you an ocean of happiness, dreams that unfold into wondrous realities, and a life as radiant as your heart.

Keep shining your magnificent light, Leela. You are truly, deeply irreplaceable.

With all my love and admiration,
Your Biggest Fan ❤️`,
    scenes: [
      {
        id: 1,
        chapter: 1,
        chapterName: "THE PROLOGUE",
        chapterQuote: "When the universe was blessed with your radiant light",
        title: "The Bougainvillea Whisper",
        image: "assets/photos/photo_01.jpg",
        caption: "In a world of constant rush, you arrived like a soft blossom bathed in morning golden light."
      },
      {
        id: 2,
        chapter: 1,
        chapterName: "THE PROLOGUE",
        chapterQuote: "When the universe was blessed with your radiant light",
        title: "The Starlight Eyes",
        image: "assets/photos/photo_07.jpg",
        caption: "They say eyes tell stories, but yours hold entire galaxies of warmth, innocence, and wonder."
      },
      {
        id: 3,
        chapter: 1,
        chapterName: "THE PROLOGUE",
        chapterQuote: "When the universe was blessed with your radiant light",
        title: "The Sweetest Soul",
        image: "assets/photos/photo_03.jpg",
        caption: "A smile so sweet and gentle that it instantly makes any heavy day feel light and joyful."
      },
      {
        id: 4,
        chapter: 1,
        chapterName: "THE PROLOGUE",
        chapterQuote: "When the universe was blessed with your radiant light",
        title: "Heart of Pure Gold",
        image: "assets/photos/photo_06.jpg",
        caption: "Simple, genuine, and wearing kindness like the most precious jewel."
      },
      {
        id: 5,
        chapter: 2,
        chapterName: "CAMPUS SUNSHINE & LAUGHTER",
        chapterQuote: "Turning every corner into a scene worth replaying a million times",
        title: "Flower in Her Hair",
        image: "assets/photos/photo_02.jpg",
        caption: "A yellow bloom in your hair, a sparkle in your step — you make nature itself smile back."
      },
      {
        id: 6,
        chapter: 2,
        chapterName: "CAMPUS SUNSHINE & LAUGHTER",
        chapterQuote: "Turning every corner into a scene worth replaying a million times",
        title: "Under the Umbrella Tree",
        image: "assets/photos/photo_05.jpg",
        caption: "Lush green leaves, gentle breezes, and a peaceful aura that only Leela can bring."
      },
      {
        id: 7,
        chapter: 2,
        chapterName: "CAMPUS SUNSHINE & LAUGHTER",
        chapterQuote: "Turning every corner into a scene worth replaying a million times",
        title: "Barefoot on the Green",
        image: "assets/photos/photo_11.jpg",
        caption: "Unfiltered laughter, grounded charm, and pure carefree happiness."
      },
      {
        id: 8,
        chapter: 2,
        chapterName: "CAMPUS SUNSHINE & LAUGHTER",
        chapterQuote: "Turning every corner into a scene worth replaying a million times",
        title: "Palm Breeze & Warmth",
        image: "assets/photos/photo_14.jpg",
        caption: "Standing tall, radiating grace, and lighting up the garden with that unmistakable smile."
      },
      {
        id: 9,
        chapter: 2,
        chapterName: "CAMPUS SUNSHINE & LAUGHTER",
        chapterQuote: "Turning every corner into a scene worth replaying a million times",
        title: "The Everyday Heroine",
        image: "assets/photos/photo_19.jpg",
        caption: "Ordinary walkways turn into movie sets simply because you are walking down them."
      },
      {
        id: 10,
        chapter: 3,
        chapterName: "RAINDROPS & UNSCRIPTED SMILES",
        chapterQuote: "Because the sweetest scenes in life are the ones we never rehearsed",
        title: "Raindrops & The Umbrella",
        image: "assets/photos/photo_13.jpg",
        caption: "Dancing through life’s weather with that fearless spirit and a smile that outshines the gray sky."
      },
      {
        id: 11,
        chapter: 3,
        chapterName: "RAINDROPS & UNSCRIPTED SMILES",
        chapterQuote: "Because the sweetest scenes in life are the ones we never rehearsed",
        title: "Angel in White",
        image: "assets/photos/photo_04.jpg",
        caption: "Draped in white like sunlight dancing against ancient stones — pure cinematic poetry."
      },
      {
        id: 12,
        chapter: 3,
        chapterName: "RAINDROPS & UNSCRIPTED SMILES",
        chapterQuote: "Because the sweetest scenes in life are the ones we never rehearsed",
        title: "The Playful Spark",
        image: "assets/photos/photo_08.jpg",
        caption: "Your playful, silly, candid moments are the ones we treasure the most."
      },
      {
        id: 13,
        chapter: 3,
        chapterName: "RAINDROPS & UNSCRIPTED SMILES",
        chapterQuote: "Because the sweetest scenes in life are the ones we never rehearsed",
        title: "Golden Hour Glow",
        image: "assets/photos/photo_10.jpg",
        caption: "Warmth in pink, laughter in amber, and a spirit full of uncontainable joy."
      },
      {
        id: 14,
        chapter: 3,
        chapterName: "RAINDROPS & UNSCRIPTED SMILES",
        chapterQuote: "Because the sweetest scenes in life are the ones we never rehearsed",
        title: "The Candid Charm",
        image: "assets/photos/photo_17.jpg",
        caption: "Tucking hair behind your ear, caught mid-smile — the quiet scenes that steal our hearts."
      },
      {
        id: 15,
        chapter: 4,
        chapterName: "THE ROYAL GRACE",
        chapterQuote: "Incomparable beauty, timeless elegance, and queen energy",
        title: "The Balcony Serenade",
        image: "assets/photos/photo_09.jpg",
        caption: "Draped in midnight navy and silver embroidery — looking like royalty against the open sky."
      },
      {
        id: 16,
        chapter: 4,
        chapterName: "THE ROYAL GRACE",
        chapterQuote: "Incomparable beauty, timeless elegance, and queen energy",
        title: "Golden Reflections",
        image: "assets/photos/photo_16.jpg",
        caption: "Every mirror captures your elegance, but your soul's beauty outshines every diamond."
      },
      {
        id: 17,
        chapter: 4,
        chapterName: "THE ROYAL GRACE",
        chapterQuote: "Incomparable beauty, timeless elegance, and queen energy",
        title: "The Emerald Queen",
        image: "assets/photos/photo_15.jpg",
        caption: "In traditional emerald and gold — an absolute movie heroine with unforgettable grace."
      },
      {
        id: 18,
        chapter: 4,
        chapterName: "THE ROYAL GRACE",
        chapterQuote: "Incomparable beauty, timeless elegance, and queen energy",
        title: "Wine Velvet & Dreams",
        image: "assets/photos/photo_21.jpg",
        caption: "Gazing by the window in wine magenta — looking towards a future as radiant as your heart."
      },
      {
        id: 19,
        chapter: 5,
        chapterName: "MOMENTS FOR ETERNITY",
        chapterQuote: "To the person who makes every heartbeat a celebration",
        title: "Oye Meghamla Vibes",
        image: "assets/photos/photo_12.jpg",
        caption: "Like your favorite melodies, every memory with you plays like an evergreen soundtrack."
      },
      {
        id: 20,
        chapter: 5,
        chapterName: "MOMENTS FOR ETERNITY",
        chapterQuote: "To the person who makes every heartbeat a celebration",
        title: "Peace in the Garden",
        image: "assets/photos/photo_18.jpg",
        caption: "A quiet heart, a gentle soul, and a presence that brings comfort to everyone around you."
      },
      {
        id: 21,
        chapter: 5,
        chapterName: "MOMENTS FOR ETERNITY",
        chapterQuote: "To the person who makes every heartbeat a celebration",
        title: "The Stepping Stones",
        image: "assets/photos/photo_20.jpg",
        caption: "Every step you take leaves footprints of joy, warmth, and inspiration."
      },
      {
        id: 22,
        chapter: 5,
        chapterName: "MOMENTS FOR ETERNITY",
        chapterQuote: "To the person who makes every heartbeat a celebration",
        title: "The One & Only Leela",
        image: "assets/photos/photo_22.jpg",
        caption: "To the girl who is the heartbeat of this entire movie — today, we celebrate YOU!"
      }
    ]
  };

  // State
  let config = loadConfig();
  let currentStage = 'stage-ticket'; // stage-ticket | stage-countdown | stage-movie | stage-climax
  let currentSceneIndex = 0;
  let isPlaying = false;
  let sceneProgress = 0;
  let sceneDuration = 5500; // ms per scene
  let progressInterval = null;
  let lastFrameTime = performance.now();
  let timecodeFrames = 0;
  let isMuted = false;
  let synthAudioEnabled = false; // Background synthesizer sound completely disabled
  let candlesBlown = false;
  let audioContext = null;
  let ytPlayer = null;
  let isYtReady = false;

  // DOM Elements
  const stages = {
    ticket: document.getElementById('stage-ticket'),
    countdown: document.getElementById('stage-countdown'),
    movie: document.getElementById('stage-movie'),
    climax: document.getElementById('stage-climax')
  };

  // Countdown elements
  const studioSlate = document.getElementById('studio-slate');
  const leaderBox = document.getElementById('leader-countdown-box');
  const countdownNum = document.getElementById('countdown-num');
  const rollingCredits = document.getElementById('rolling-credits-slate');

  // Movie elements
  const currentPhoto = document.getElementById('current-movie-photo');
  const subtitleText = document.getElementById('cinematic-subtitle-text');
  const chapterTag = document.getElementById('caption-chapter-tag');
  const sceneCounter = document.getElementById('scene-counter-display');
  const chapterMini = document.getElementById('chapter-tag-mini');
  const timelineSegments = document.getElementById('timeline-segments');
  const chapterTitleCard = document.getElementById('chapter-title-card');
  const chapterNumberDisplay = document.getElementById('chapter-number-display');
  const chapterHeadlineDisplay = document.getElementById('chapter-headline-display');
  const chapterQuoteDisplay = document.getElementById('chapter-quote-display');
  const stampSceneNum = document.getElementById('stamp-scene-num');
  const timecodeEl = document.getElementById('timecode');
  const lightLeak = document.getElementById('light-leak');

  // Climax elements
  const grandTitle = document.getElementById('grand-title-display');
  const climaxTagline = document.getElementById('climax-tagline-display');
  const scrollLetterText = document.getElementById('scroll-letter-text');
  const storyboardGrid = document.getElementById('storyboard-thumbnails-grid');
  const btnBlowCandles = document.getElementById('btn-blow-candles');

  // Dock & Spotify elements
  const spotifyDock = document.getElementById('spotify-dock');
  const dockToggle = document.getElementById('dock-toggle');
  const vinylArt = document.getElementById('vinyl-art');
  const audioEqBars = document.getElementById('audio-eq-bars');
  const customAudioInput = document.getElementById('custom-audio-input');
  const bgAudio = document.getElementById('bg-audio');

  // Director Modal elements
  const directorModal = document.getElementById('director-modal');
  const scenesEditorList = document.getElementById('scenes-editor-list');

  // Toast
  const toastEl = document.getElementById('cinema-toast');

  // ==========================================================================
  // CONFIGURATION STORAGE & INITIALIZATION
  // ==========================================================================
  function loadConfig() {
    try {
      const stored = localStorage.getItem('birthday_movie_config_v2');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.scenes && parsed.scenes.length === DEFAULT_CONFIG.scenes.length) {
          const merged = {
            ...DEFAULT_CONFIG,
            ...parsed,
            scenes: DEFAULT_CONFIG.scenes.map((defaultScene, idx) => {
              const saved = parsed.scenes && parsed.scenes[idx] ? parsed.scenes[idx] : {};
              return { ...defaultScene, ...saved };
            })
          };
          if (merged.birthdayDate === "November 18, 2026") {
            merged.birthdayDate = DEFAULT_CONFIG.birthdayDate;
          }
          return merged;
        }
      }
    } catch (e) {
      console.warn("Could not load stored config:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }

  function saveConfig() {
    try {
      localStorage.setItem('birthday_movie_config_v2', JSON.stringify(config));
    } catch (e) {
      showToast("Storage quota reached! Some images might be too large.");
    }
  }

  function updateDomFromConfig() {
    // Ticket
    const ticketRecipient = document.getElementById('ticket-recipient-display');
    if (ticketRecipient) ticketRecipient.textContent = config.recipientName.toUpperCase();
    const ticketDate = document.getElementById('ticket-date-display');
    if (ticketDate) ticketDate.textContent = config.birthdayDate;
    
    // Credits
    const creditStar = document.getElementById('credit-starring-name');
    if (creditStar) creditStar.textContent = config.recipientName.toUpperCase();
    const creditDir = document.getElementById('credit-director-name');
    if (creditDir) creditDir.textContent = config.directorName;

    // Climax
    if (grandTitle) {
      grandTitle.innerHTML = `${escapeHtml(config.recipientName.toUpperCase())}<br><span class="gold-shimmer-text">HAPPY BIRTHDAY!</span>`;
    }
    if (climaxTagline) climaxTagline.textContent = config.finaleTagline;
    
    // Formatted scroll letter
    if (scrollLetterText) {
      const formattedLetter = config.letterContent
        .replace(/Leela/g, `<span class="recipient-name-inline">${escapeHtml(config.recipientName)}</span>`)
        .replace(/\n/g, '<br>');
      scrollLetterText.innerHTML = formattedLetter;
    }

    // Build timeline bars
    buildTimeline();
    // Build storyboard thumbnails
    buildStoryboardGrid();
    // Build rolling 35mm filmstrip marquee
    buildMarqueeFilmTrack();
  }

  function buildMarqueeFilmTrack() {
    const track = document.getElementById('ticket-film-track');
    if (!track) return;
    track.innerHTML = '';
    // Duplicate scenes so marquee scrolls continuously without gaps
    const marqueeItems = [...config.scenes, ...config.scenes];
    marqueeItems.forEach((scene) => {
      const frame = document.createElement('div');
      frame.className = 'film-marquee-frame';
      frame.title = `Scene ${scene.id}: ${scene.title}`;
      frame.innerHTML = `
        <div class="marquee-sprockets-row">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="marquee-photo-holder">
          <img src="${scene.image}" alt="${scene.title}" loading="lazy" onerror="this.src='assets/img1.jpg'">
        </div>
        <div class="marquee-sprockets-row">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      `;
      frame.addEventListener('click', () => {
        switchStage('stage-movie');
        goToScene(scene.id - 1);
      });
      track.appendChild(frame);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  // ==========================================================================
  // WEB AUDIO API - CINEMATIC SOUND & SFX SYNTHESIZER
  // ==========================================================================
  function getAudioContext() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioContext = new AudioCtx();
      }
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    return audioContext;
  }

  let synthInterval = null;
  // Melodic chords inspired by the romance of Inthandham (Sita Ramam)
  const melodicChords = [
    [261.63, 329.63, 392.00, 523.25], // C major (Pure & Radiant)
    [220.00, 261.63, 329.63, 440.00], // A minor (Soulful)
    [174.61, 220.00, 261.63, 349.23], // F major (Warm breeze)
    [196.00, 246.94, 293.66, 392.00], // G major (Grand & Bright)
    [220.00, 277.18, 329.63, 440.00], // A major (Tender romance)
    [174.61, 261.63, 329.63, 523.25], // Fmaj7 (Dreamy starlight)
    [196.00, 293.66, 392.00, 587.33]  // Gsus4 (Anticipation)
  ];
  let chordIndex = 0;

  function playSynthChord() {
    if (!synthAudioEnabled || isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const chord = melodicChords[chordIndex % melodicChords.length];
    chordIndex++;

    const now = ctx.currentTime;
    chord.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + (i * 0.08));

      gain.gain.setValueAtTime(0, now + (i * 0.08));
      gain.gain.linearRampToValueAtTime(0.045, now + (i * 0.08) + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (i * 0.08) + 3.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + (i * 0.08));
      osc.stop(now + (i * 0.08) + 4.0);
    });
  }

  function startAmbientScore() {
    if (synthInterval) clearInterval(synthInterval);
    playSynthChord();
    synthInterval = setInterval(playSynthChord, 3200);
  }

  function stopAmbientScore() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
  }

  // Countdown sync beep
  function playCountdownBeep(freq = 880, duration = 0.08) {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  // Celebratory birthday chime
  function playBirthdayFanfare() {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 523.25, 587.33, 523.25, 698.46, 659.25, 784.00];
    const now = ctx.currentTime;
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + (i * 0.28));

      gain.gain.setValueAtTime(0, now + (i * 0.28));
      gain.gain.linearRampToValueAtTime(0.08, now + (i * 0.28) + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (i * 0.28) + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + (i * 0.28));
      osc.stop(now + (i * 0.28) + 0.7);
    });
  }

  // Candle blow puff SFX
  function playCandlePuff() {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.1));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.linearRampToValueAtTime(100, now + 0.3);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(now);
  }

  // ==========================================================================
  // STAGE MANAGEMENT & TRANSITIONS
  // ==========================================================================
  function switchStage(stageName) {
    currentStage = stageName;
    Object.keys(stages).forEach(key => {
      if (stages[key]) stages[key].classList.remove('active');
    });
    const targetKey = stageName.replace('stage-', '');
    if (stages[targetKey]) {
      stages[targetKey].classList.add('active');
    }

    if (stageName === 'stage-movie') {
      startPlayback();
    } else {
      pausePlayback();
    }

    if (stageName === 'stage-climax') {
      triggerClimaxCelebration();
    }
  }

  // ==========================================================================
  // STAGE 1: COUNTDOWN & CREDITS SEQUENCE
  // ==========================================================================
  function startOpeningCreditsSequence() {
    switchStage('stage-countdown');

    // 1. Studio Logo Slate
    studioSlate.classList.add('show');
    leaderBox.style.display = 'none';
    rollingCredits.style.display = 'none';

    setTimeout(() => {
      studioSlate.classList.remove('show');
      
      // 2. Leader Countdown (5.. 4.. 3.. 2.. 1..)
      setTimeout(() => {
        leaderBox.style.display = 'flex';
        let count = 5;
        countdownNum.textContent = count;

        const countdownInterval = setInterval(() => {
          count--;
          if (count > 0) {
            countdownNum.textContent = count;
          } else {
            clearInterval(countdownInterval);
            leaderBox.style.display = 'none';
            
            // 3. Hollywood Rolling Credits
            startRollingCredits();
          }
        }, 1000);
      }, 600);
    }, 2400);
  }

  function startRollingCredits() {
    rollingCredits.style.display = 'block';
    const cards = [
      document.getElementById('credit-card-1'),
      document.getElementById('credit-card-2'),
      document.getElementById('credit-card-3'),
      document.getElementById('credit-card-4')
    ];

    let currentCard = 0;
    function showNextCard() {
      cards.forEach(c => { if (c) c.classList.remove('active'); });
      if (currentCard < cards.length) {
        if (cards[currentCard]) cards[currentCard].classList.add('active');
        currentCard++;
        setTimeout(showNextCard, 2000);
      } else {
        // Flash light leak and jump into the Movie!
        flashLightLeak();
        setTimeout(() => {
          switchStage('stage-movie');
          goToScene(0);
        }, 800);
      }
    }

    showNextCard();
  }

  function flashLightLeak() {
    if (!lightLeak) return;
    lightLeak.classList.add('flash');
    setTimeout(() => {
      lightLeak.classList.remove('flash');
    }, 800);
  }

  // ==========================================================================
  // STAGE 2: MOVIE PLAYBACK ENGINE (22 SCENES)
  // ==========================================================================
  function buildTimeline() {
    if (!timelineSegments) return;
    timelineSegments.innerHTML = '';
    config.scenes.forEach((scene, index) => {
      const seg = document.createElement('div');
      seg.className = `segment-bar ${index === currentSceneIndex ? 'current' : ''}`;
      seg.dataset.index = index;
      seg.title = `Scene ${index + 1}: ${scene.title}`;

      const fill = document.createElement('div');
      fill.className = 'segment-fill';
      seg.appendChild(fill);

      seg.addEventListener('click', () => {
        goToScene(index);
      });

      timelineSegments.appendChild(seg);
    });
  }

  function updateTimelineUi() {
    if (!timelineSegments) return;
    const segments = timelineSegments.querySelectorAll('.segment-bar');
    segments.forEach((seg, i) => {
      const fill = seg.querySelector('.segment-fill');
      if (i < currentSceneIndex) {
        seg.classList.add('completed');
        seg.classList.remove('current');
        if (fill) fill.style.width = '100%';
      } else if (i === currentSceneIndex) {
        seg.classList.remove('completed');
        seg.classList.add('current');
        if (fill) fill.style.width = `${sceneProgress}%`;
      } else {
        seg.classList.remove('completed', 'current');
        if (fill) fill.style.width = '0%';
      }
    });

    if (sceneCounter) {
      sceneCounter.textContent = `SCENE ${currentSceneIndex + 1} / ${config.scenes.length}`;
    }
  }

  const kenBurnsEffects = ['kenburns-zoom-in', 'kenburns-pan-left', 'kenburns-zoom-out', 'kenburns-pan-right'];

  function goToScene(index) {
    if (index >= config.scenes.length) {
      // Completed all 22 scenes! Reached Climax!
      switchStage('stage-climax');
      return;
    }
    if (index < 0) index = 0;

    const previousScene = config.scenes[currentSceneIndex];
    const newScene = config.scenes[index];
    const isNewChapter = !previousScene || newScene.chapter !== previousScene.chapter || index === 0;

    currentSceneIndex = index;
    sceneProgress = 0;

    if (isNewChapter) {
      showChapterCard(newScene);
    } else {
      renderScene(newScene);
    }

    updateTimelineUi();
  }

  function showChapterCard(scene) {
    if (chapterNumberDisplay) chapterNumberDisplay.textContent = `CHAPTER ${toRoman(scene.chapter)}`;
    if (chapterHeadlineDisplay) chapterHeadlineDisplay.textContent = scene.chapterName;
    if (chapterQuoteDisplay) chapterQuoteDisplay.textContent = `"${scene.chapterQuote}"`;

    if (chapterTitleCard) chapterTitleCard.classList.add('active');
    pausePlayback();

    setTimeout(() => {
      if (chapterTitleCard) chapterTitleCard.classList.remove('active');
      renderScene(scene);
      if (currentStage === 'stage-movie') {
        startPlayback();
      }
    }, 2400);
  }

  function toRoman(num) {
    const map = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' };
    return map[num] || num;
  }

  function renderScene(scene) {
    if (!currentPhoto) return;
    currentPhoto.style.opacity = '0';

    setTimeout(() => {
      currentPhoto.onerror = function () {
        this.src = 'assets/img1.jpg';
      };
      currentPhoto.src = scene.image;

      // Apply dynamic Ken Burns motion
      kenBurnsEffects.forEach(cls => currentPhoto.classList.remove(cls));
      const nextEffect = kenBurnsEffects[currentSceneIndex % kenBurnsEffects.length];
      currentPhoto.classList.add(nextEffect);

      currentPhoto.style.opacity = '1';
    }, 200);

    // Update Subtitles & Info
    if (chapterTag) chapterTag.textContent = `CHAPTER ${toRoman(scene.chapter)} • ${scene.chapterName}`;
    if (subtitleText) subtitleText.textContent = `"${scene.caption}"`;
    if (chapterMini) chapterMini.textContent = scene.chapterName;
    if (stampSceneNum) stampSceneNum.textContent = `SCENE ${String(scene.id).padStart(2, '0')} / 22`;

    flashLightLeak();
  }

  function startPlayback() {
    isPlaying = true;
    const playPauseBtn = document.getElementById('hud-play-pause');
    if (playPauseBtn) playPauseBtn.textContent = '⏸';

    lastFrameTime = performance.now();
    if (!progressInterval) {
      progressInterval = requestAnimationFrame(playbackLoop);
    }
  }

  function pausePlayback() {
    isPlaying = false;
    const playPauseBtn = document.getElementById('hud-play-pause');
    if (playPauseBtn) playPauseBtn.textContent = '▶';

    if (progressInterval) {
      cancelAnimationFrame(progressInterval);
      progressInterval = null;
    }
  }

  function togglePlayPause() {
    if (isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  }

  function playbackLoop(timestamp) {
    if (!isPlaying || currentStage !== 'stage-movie') {
      progressInterval = null;
      return;
    }

    const delta = timestamp - lastFrameTime;
    lastFrameTime = timestamp;

    sceneProgress += (delta / sceneDuration) * 100;
    if (sceneProgress >= 100) {
      sceneProgress = 0;
      goToScene(currentSceneIndex + 1);
    } else {
      updateTimelineUi();
    }

    progressInterval = requestAnimationFrame(playbackLoop);
  }

  // ==========================================================================
  // STAGE 3: GRAND CLIMAX CELEBRATION
  // ==========================================================================
  function triggerClimaxCelebration() {
    launchFireworksBursts(10);
    playBirthdayFanfare();

    // Reset candles state
    candlesBlown = false;
    document.querySelectorAll('.flame').forEach(f => f.classList.remove('blown-out'));
    document.querySelectorAll('.smoke').forEach(s => s.classList.remove('rise'));
    if (btnBlowCandles) {
      btnBlowCandles.disabled = false;
      btnBlowCandles.innerHTML = '<span class="btn-shine"></span>🎂 Blow Candles & Make a Wish!';
    }
  }

  function blowOutCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    playCandlePuff();

    document.querySelectorAll('.flame').forEach(f => f.classList.add('blown-out'));
    document.querySelectorAll('.smoke').forEach(s => s.classList.add('rise'));

    if (btnBlowCandles) {
      btnBlowCandles.disabled = true;
      btnBlowCandles.innerHTML = '✨ Wish Made! Candles Blown! ✨';
    }

    launchFireworksBursts(16);
    showToast(`🎉 Happy Birthday, ${config.recipientName}! May all your wishes come true!`);
  }

  function buildStoryboardGrid() {
    if (!storyboardGrid) return;
    storyboardGrid.innerHTML = '';
    config.scenes.forEach((scene, index) => {
      const card = document.createElement('div');
      card.className = 'storyboard-card';
      card.innerHTML = `
        <img src="${scene.image}" alt="${scene.title}" class="storyboard-thumb-img" onerror="this.src='assets/img1.jpg'">
        <div class="storyboard-card-info">
          <div class="storyboard-scene-tag">SCENE ${String(index + 1).padStart(2, '0')}</div>
          <div class="storyboard-scene-title">${scene.title}</div>
        </div>
      `;
      card.addEventListener('click', () => {
        switchStage('stage-movie');
        goToScene(index);
      });
      storyboardGrid.appendChild(card);
    });
  }

  // ==========================================================================
  // TIMECODE TICKER (CINEMASCOPE 24 FPS)
  // ==========================================================================
  function updateTimecode() {
    timecodeFrames++;
    const fps = 24;
    const totalSeconds = Math.floor(timecodeFrames / fps);
    const frames = timecodeFrames % fps;
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    const pad = n => (n < 10 ? '0' + n : n);
    if (timecodeEl) {
      timecodeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
    }
    requestAnimationFrame(updateTimecode);
  }

  // ==========================================================================
  // CANVAS ENGINE: FLOATING STARDUST & BOKEH PARTICLES
  // ==========================================================================
  const cinemaCanvas = document.getElementById('cinema-canvas');
  let cCtx = null;
  const particles = [];
  const bokehs = [];

  function initCinemaCanvas() {
    if (!cinemaCanvas) return;
    cCtx = cinemaCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < 75; i++) {
      particles.push({
        x: Math.random() * cinemaCanvas.width,
        y: Math.random() * cinemaCanvas.height,
        size: Math.random() * 2.2 + 0.5,
        speedY: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        color: Math.random() > 0.3 ? '#f6c445' : '#ffea9f'
      });
    }

    for (let i = 0; i < 9; i++) {
      bokehs.push({
        x: Math.random() * cinemaCanvas.width,
        y: Math.random() * cinemaCanvas.height,
        radius: Math.random() * 80 + 40,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        hue: Math.random() > 0.5 ? 42 : 340
      });
    }

    requestAnimationFrame(renderCinemaCanvas);
  }

  function resizeCanvas() {
    if (!cinemaCanvas) return;
    cinemaCanvas.width = window.innerWidth;
    cinemaCanvas.height = window.innerHeight;
    const fwCanvas = document.getElementById('fireworks-canvas');
    if (fwCanvas) {
      fwCanvas.width = window.innerWidth;
      fwCanvas.height = window.innerHeight;
    }
  }

  function renderCinemaCanvas() {
    if (!cCtx) return;
    cCtx.clearRect(0, 0, cinemaCanvas.width, cinemaCanvas.height);

    bokehs.forEach(b => {
      b.x += b.speedX;
      b.y += b.speedY;
      if (b.x < -100) b.x = cinemaCanvas.width + 100;
      if (b.x > cinemaCanvas.width + 100) b.x = -100;
      if (b.y < -100) b.y = cinemaCanvas.height + 100;
      if (b.y > cinemaCanvas.height + 100) b.y = -100;

      const grad = cCtx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
      grad.addColorStop(0, `hsla(${b.hue}, 90%, 65%, 0.08)`);
      grad.addColorStop(1, 'transparent');
      cCtx.fillStyle = grad;
      cCtx.beginPath();
      cCtx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      cCtx.fill();
    });

    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

      if (p.y < 0) {
        p.y = cinemaCanvas.height;
        p.x = Math.random() * cinemaCanvas.width;
      }

      cCtx.globalAlpha = Math.max(0.1, Math.min(1, p.opacity));
      cCtx.fillStyle = p.color;
      cCtx.beginPath();
      cCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      cCtx.fill();
    });

    cCtx.globalAlpha = 1;
    requestAnimationFrame(renderCinemaCanvas);
  }

  // ==========================================================================
  // CANVAS ENGINE: FIREWORKS & CONFETTI CELEBRATION
  // ==========================================================================
  const fwCanvas = document.getElementById('fireworks-canvas');
  let fwCtx = null;
  const fireworks = [];

  function initFireworksCanvas() {
    if (!fwCanvas) return;
    fwCtx = fwCanvas.getContext('2d');
    requestAnimationFrame(renderFireworksLoop);
  }

  function launchFireworksBursts(count = 6) {
    if (!fwCanvas) return;
    const colors = ['#f6c445', '#ffea9f', '#ff6b8b', '#ffffff', '#4deeea', '#ffb703', '#e056fd'];
    for (let c = 0; c < count; c++) {
      setTimeout(() => {
        const x = Math.random() * (fwCanvas.width * 0.8) + (fwCanvas.width * 0.1);
        const y = Math.random() * (fwCanvas.height * 0.5) + (fwCanvas.height * 0.15);
        const color = colors[Math.floor(Math.random() * colors.length)];
        createFireworkExplosion(x, y, color);
      }, c * 320);
    }
  }

  function createFireworkExplosion(x, y, color) {
    const numParticles = 65;
    for (let i = 0; i < numParticles; i++) {
      const angle = (Math.PI * 2 / numParticles) * i + (Math.random() * 0.2);
      const speed = Math.random() * 5 + 2;
      fireworks.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: color,
        alpha: 1,
        decay: Math.random() * 0.018 + 0.012,
        gravity: 0.08,
        size: Math.random() * 2.5 + 1.2
      });
    }
  }

  function renderFireworksLoop() {
    if (!fwCtx) return;
    fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);

    for (let i = fireworks.length - 1; i >= 0; i--) {
      const p = fireworks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        fireworks.splice(i, 1);
        continue;
      }

      fwCtx.globalAlpha = p.alpha;
      fwCtx.fillStyle = p.color;
      fwCtx.beginPath();
      fwCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      fwCtx.fill();
    }

    fwCtx.globalAlpha = 1;
    requestAnimationFrame(renderFireworksLoop);
  }

  // ==========================================================================
  // DIRECTOR'S STUDIO (CUSTOMIZER MODAL)
  // ==========================================================================
  function openDirectorStudio() {
    document.getElementById('input-recipient-name').value = config.recipientName;
    document.getElementById('input-birthday-date').value = config.birthdayDate;
    document.getElementById('input-director-name').value = config.directorName;
    document.getElementById('input-custom-tagline').value = config.finaleTagline;
    document.getElementById('input-letter-content').value = config.letterContent;

    buildScenesEditor();
    directorModal.classList.add('active');
  }

  function closeDirectorStudio() {
    directorModal.classList.remove('active');
  }

  function buildScenesEditor() {
    scenesEditorList.innerHTML = '';
    config.scenes.forEach((scene, index) => {
      const item = document.createElement('div');
      item.className = 'scene-edit-card';
      item.innerHTML = `
        <div class="scene-edit-header">
          <span>SCENE ${String(scene.id).padStart(2, '0')} • ${scene.chapterName}</span>
          <span style="color:#aaa; font-size:11px;">Scene ${index + 1} of 22</span>
        </div>
        <div class="scene-edit-grid">
          <div class="scene-edit-preview">
            <img src="${scene.image}" alt="Preview" id="preview-scene-${index}" onerror="this.src='assets/img1.jpg'">
          </div>
          <div class="scene-edit-fields">
            <div class="file-upload-row">
              <input type="text" class="form-input" id="input-scene-url-${index}" value="${scene.image}" placeholder="Image Path/URL">
              <label class="upload-small-btn" for="file-scene-${index}">
                📁 Upload
                <input type="file" id="file-scene-${index}" accept="image/*" style="display:none;">
              </label>
            </div>
            <input type="text" class="form-input" id="input-scene-caption-${index}" value="${escapeHtml(scene.caption)}" placeholder="Emotional caption for this photo...">
          </div>
        </div>
      `;

      const fileInput = item.querySelector(`#file-scene-${index}`);
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (re) => {
            const dataUrl = re.target.result;
            document.getElementById(`input-scene-url-${index}`).value = dataUrl;
            document.getElementById(`preview-scene-${index}`).src = dataUrl;
          };
          reader.readAsDataURL(file);
        }
      });

      const urlInput = item.querySelector(`#input-scene-url-${index}`);
      urlInput.addEventListener('input', (e) => {
        document.getElementById(`preview-scene-${index}`).src = e.target.value;
      });

      scenesEditorList.appendChild(item);
    });
  }

  function saveDirectorStudioChanges() {
    config.recipientName = document.getElementById('input-recipient-name').value.trim() || DEFAULT_CONFIG.recipientName;
    config.birthdayDate = document.getElementById('input-birthday-date').value.trim() || DEFAULT_CONFIG.birthdayDate;
    config.directorName = document.getElementById('input-director-name').value.trim() || DEFAULT_CONFIG.directorName;
    config.finaleTagline = document.getElementById('input-custom-tagline').value.trim() || DEFAULT_CONFIG.finaleTagline;
    config.letterContent = document.getElementById('input-letter-content').value.trim() || DEFAULT_CONFIG.letterContent;

    config.scenes.forEach((scene, index) => {
      const urlInput = document.getElementById(`input-scene-url-${index}`);
      const captionInput = document.getElementById(`input-scene-caption-${index}`);
      if (urlInput) scene.image = urlInput.value.trim() || scene.image;
      if (captionInput) scene.caption = captionInput.value.trim() || scene.caption;
    });

    saveConfig();
    updateDomFromConfig();
    closeDirectorStudio();
    showToast("🎬 Movie personalized successfully!");

    if (currentStage === 'stage-movie') {
      goToScene(currentSceneIndex);
    }
  }

  function resetToDefaults() {
    if (confirm("Reset all custom photos, names, and captions back to Leela's original 22-scene cinematic movie?")) {
      config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
      saveConfig();
      updateDomFromConfig();
      buildScenesEditor();
      showToast("↺ Movie restored to original 22 scenes.");
    }
  }

  // ==========================================================================
  // INTHANDHAM SOUNDTRACK ENGINE (LOCAL DIRECT MP3 PLAYBACK)
  // ==========================================================================
  let audioPrimed = false;

  // Prime / unlock audio playback on mobile browsers on first interaction
  function primeAudioOnFirstGesture() {
    if (audioPrimed) return;
    audioPrimed = true;
    if (bgAudio) {
      bgAudio.load();
    }
  }
  document.addEventListener('touchstart', primeAudioOnFirstGesture, { once: true, passive: true });
  document.addEventListener('pointerdown', primeAudioOnFirstGesture, { once: true, passive: true });

  function playInthandhamSong() {
    isMuted = false;
    const soundIcon = document.getElementById('sound-icon');
    if (soundIcon) soundIcon.textContent = '🔊';

    // Play direct local audio file: 100% reliable on cold boot & any device
    if (bgAudio) {
      bgAudio.volume = 1.0;
      const playPromise = bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log("Inthandham soundtrack started playing successfully.");
        }).catch(err => {
          console.warn("Direct HTML5 audio playback prevented or deferred:", err);
          // Retry on next touch if browser policy temporarily blocked it
          const retryOnTouch = () => {
            if (!isMuted && bgAudio.paused) {
              bgAudio.play().catch(() => {});
            }
            document.removeEventListener('click', retryOnTouch);
            document.removeEventListener('touchstart', retryOnTouch);
          };
          document.addEventListener('click', retryOnTouch, { once: true });
          document.addEventListener('touchstart', retryOnTouch, { once: true });
        });
      }
    }

    if (vinylArt) vinylArt.classList.add('spinning');
    if (audioEqBars) audioEqBars.classList.add('active');
    showToast("🎵 Playing: Inthandham (Sita Ramam)");
  }

  function setupSpotifyDock() {
    if (spotifyDock && window.innerWidth <= 768) {
      spotifyDock.classList.add('collapsed');
    }

    if (dockToggle && spotifyDock) {
      dockToggle.addEventListener('click', () => {
        spotifyDock.classList.toggle('collapsed');
      });
    }

    if (customAudioInput) {
      customAudioInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const url = URL.createObjectURL(file);
          bgAudio.src = url;
          bgAudio.play();
          if (ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();
          if (vinylArt) vinylArt.classList.add('spinning');
          if (audioEqBars) audioEqBars.classList.add('active');
          showToast(`🎵 Playing Custom Track: ${file.name}`);
        }
      });
    }
  }

  // ==========================================================================
  // EVENT LISTENERS & INITIALIZATION
  // ==========================================================================
  function setupEventListeners() {
    document.getElementById('btn-start-movie').addEventListener('click', () => {
      playInthandhamSong();
      startOpeningCreditsSequence();
    });

    document.getElementById('btn-director').addEventListener('click', openDirectorStudio);
    document.getElementById('btn-open-director-from-start').addEventListener('click', openDirectorStudio);
    const btnDirectorFinale = document.getElementById('btn-open-director-finale');
    if (btnDirectorFinale) btnDirectorFinale.addEventListener('click', openDirectorStudio);
    document.getElementById('btn-close-director').addEventListener('click', closeDirectorStudio);
    document.getElementById('btn-save-director').addEventListener('click', saveDirectorStudioChanges);
    document.getElementById('btn-reset-defaults').addEventListener('click', resetToDefaults);

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        const targetPane = document.getElementById(target);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    document.getElementById('btn-fullscreen').addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    const soundToggleBtn = document.getElementById('btn-sound-toggle');
    const soundIcon = document.getElementById('sound-icon');
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        if (soundIcon) soundIcon.textContent = isMuted ? '🔇' : '🔊';
        if (isMuted) {
          if (bgAudio) bgAudio.pause();
          if (ytPlayer && ytPlayer.pauseVideo) {
            try { ytPlayer.pauseVideo(); } catch (e) {}
          }
          if (audioEqBars) audioEqBars.classList.remove('active');
          if (vinylArt) vinylArt.classList.remove('spinning');
          showToast("Audio Muted");
        } else {
          if (bgAudio) bgAudio.play().catch(() => {});
          if (ytPlayer && ytPlayer.playVideo) {
            try { ytPlayer.playVideo(); } catch (e) {}
          }
          if (audioEqBars) audioEqBars.classList.add('active');
          if (vinylArt) vinylArt.classList.add('spinning');
          showToast("Audio Unmuted");
        }
      });
    }

    document.getElementById('hud-prev').addEventListener('click', () => {
      goToScene(currentSceneIndex - 1);
    });
    document.getElementById('hud-next').addEventListener('click', () => {
      goToScene(currentSceneIndex + 1);
    });
    document.getElementById('hud-play-pause').addEventListener('click', togglePlayPause);
    document.getElementById('btn-skip-climax').addEventListener('click', () => {
      switchStage('stage-climax');
    });

    if (btnBlowCandles) {
      btnBlowCandles.addEventListener('click', blowOutCandles);
    }
    const cakeElement = document.getElementById('cinematic-cake-element');
    if (cakeElement) {
      cakeElement.addEventListener('click', blowOutCandles);
    }

    const btnReplay = document.getElementById('btn-replay-movie');
    if (btnReplay) {
      btnReplay.addEventListener('click', () => {
        if (bgAudio) {
          bgAudio.currentTime = 0;
          if (!isMuted) bgAudio.play().catch(() => {});
        }
        startOpeningCreditsSequence();
      });
    }

    const btnMoreFw = document.getElementById('btn-launch-fireworks');
    if (btnMoreFw) {
      btnMoreFw.addEventListener('click', () => {
        launchFireworksBursts(8);
        playBirthdayFanfare();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (directorModal.classList.contains('active')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.code === 'ArrowRight') {
        goToScene(currentSceneIndex + 1);
      } else if (e.code === 'ArrowLeft') {
        goToScene(currentSceneIndex - 1);
      }
    });
  }

  // Initial Boot
  window.addEventListener('DOMContentLoaded', () => {
    updateDomFromConfig();
    initCinemaCanvas();
    initFireworksCanvas();
    setupSpotifyDock();
    setupEventListeners();
    updateTimecode();
  });

})();
