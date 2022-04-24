var BG = {
	
	/* settings */
	
	currentPage: `home`, // start page
	previewLogoTime: 1, // sec
	videoLink: `Wqsg2vWHZBM`, // youtube.com/watch?v=Wqsg2vWHZBM
	videoStartTime: 115,
	volume: 0.1,

	rulesContent: [{ 
			title:'Basic Rules', 
			text:[
                {n:`1.1`,t:'No Vehicle Deathmatching (VDM)'},
                {n:`1.2`,t:'No Random Deathmatching (RDM)'},
                {n:`1.3`,t:'No server disrespecting (Perma Ban)'},
                {n:`2.1`,t:'No player Disrespect'},
                {n:`2.2`,t:'No metagaming'},
                {n:`2.3`,t:'No discrimitantion (Homophobia, Racism)'},
                {n:`2.4`,t:'No Powergaming'},
                {n:`3.1`,t:'No cheating/ Exploiting'},
                {n:`3.2`,t:'No Abuse of in game mechanics'},
                {n:`3.3`,t:'No FailRP'}
            ]
		}
    ],
	
	newsContent: [
        {img: 'https://raw.githubusercontent.com/BuyLabs/LoadingScreenAssets/main/21157bc08ca1ee0fb42d5a484f7d8b78ecef6d6786f4c5fce32a780a4919df24.png?token=GHSAT0AAAAAABQDPOXR3HEDQIQ5XCSBD6IYYTFFXSQ', title:'Current Deals!', data:'28/02/2022', text:'Hello wonderful people of San Andreas State Roleplay we currently have some great offers you should take advantage of before they end, These offers are as followed: 3 Cfx.re upvotes on our server for a personal vehicle, 4 discord server boosts for a personal vehicle and ped, get 10 people into the server and get a personal car !, If you are looking for to buy anthing for in game please visit: https://store.sasrp.xyz/' },
		{img: 'https://raw.githubusercontent.com/BuyLabs/LoadingScreenAssets/main/21157bc08ca1ee0fb42d5a484f7d8b78ecef6d6786f4c5fce32a780a4919df24.png?token=GHSAT0AAAAAABQDPOXR3HEDQIQ5XCSBD6IYYTFFXSQ', title:'Store Sale!', data:'28/02/2022', text:'Hello everyone There is a current sale on our store this is the march 2022 sale please use code: march22 at checkout for %25 of all purchases on our store you can use this code on all items within the store this excludes the following: "Monthly or recurring purchases" Thanks for reading please make sure to let people know.' },
        {img: 'https://raw.githubusercontent.com/BuyLabs/LoadingScreenAssets/main/21157bc08ca1ee0fb42d5a484f7d8b78ecef6d6786f4c5fce32a780a4919df24.png?token=GHSAT0AAAAAABQDPOXR3HEDQIQ5XCSBD6IYYTFFXSQ', title:'Changelog!', data:'28/02/2022', text:'Added - More gabz maps, Police Radar, New phone, /Duty Script, Updated discord' },
    ],
	
	contactsContent: [
        {avatar: 'assets/sean.jpg', title:'Zionzyee', status:'Server owner', desc:'A muppet from Manchester who dont go outside' },
        {avatar: 'assets/noavatar.jpg', title:'Tencreator', status:'Server owner', desc:'Has the record of the most reports on the server and has a holding cell for her PC'},
    ],
	
	musicList: [
        { name:'Digga D - Pump 101', link:'https://raw.githubusercontent.com/BuyLabs/LoadingScreenAssets/main/pump101.mp3?token=GHSAT0AAAAAABQDPOXQHRWMD2KDGZQA7PP4YTFF2KQ' },
        { name:'NBA youngboy - Make no sense ', link:'https://raw.githubusercontent.com/BuyLabs/LoadingScreenAssets/main/MakeNoSense.mp3?token=GHSAT0AAAAAABQDPOXQCZYOHQ3UXI6J4UVAYTFF2BA' },
        { name:'Ksean - Touring (Unreleased)', link:'https://raw.githubusercontent.com/BuyLabs/LoadingScreenAssets/main/KseanT.mp3?token=GHSAT0AAAAAABQDPOXQORKOJLJR77I2XGRUYTFFZLQ' }
    ],

	/* system */

	load: function()
	{
		BG.loadProgress.onStart();
		video_background.src = `https://www.youtube.com/embed/${BG.videoLink}?autoplay=1&amp&start=${BG.videoStartTime};showinfo=0&amp;controls=0&amp;loop=1&amp;playsinline=1&amp;mute=1&amp;rel=0&amp;playlist=${BG.videoLink};`;

		setTimeout(function()
		{
			BG.outPreview();
		}, BG.previewLogoTime*1000);
		
		BG.rulesContent.forEach((e) => { rules.innerHTML += BG.getRules(e); });
		BG.newsContent.forEach((e) => { news.innerHTML += BG.getNews(e); });
		BG.contactsContent.forEach((e) => { contacts.innerHTML += BG.getContacts(e); });
		
		C.loadCursor();
		BG.music.load();
	},
	
	getMusic: function(e)
	{
		return `<div class="music-volume">
					<img id="musicVolume" class="iconMusic" src="assets/volume-mute.png" onclick="BG.music.onClickMute()"/>
					<input id="musicVolumeSlider" type="range" min="0" max="1" step=".05" value="${BG.volume}" onchange="BG.music.onChangeVolume(this.value)" onmousemove="BG.music.onChangeVolumeMouseSlider(event, this.value)"/>
					<img id="musicMix" class="iconMusic" src="assets/mix.png" onclick="BG.music.onClickMix()"/>
					<audio id="audioblock" src="${e.link}"></audio>
				</div>
				<div id="musicDesc">${e.name}</div>`;
	},
	
	getContacts: function(e)
	{
		let result = ``;
		let img = e.avatar == `` ? `assets/logo-block.png"` : e.avatar;
		result += `	<div class="contact-item">
						<img class="contact-avatar" src="${img}"/>
						<div class="contact-item-info">
							<div class="contact-info-discord">${e.title}</div>
							<div class="contact-info-status">${e.status}</div>
							<div class="contact-info-desc">${e.desc}</div>
						</div>
					</div>
		`;
		
		return result;
	},
	
	getNews: function(e)
	{
		let result = ``;
		let img = e.img == `` ? `assets/logo-block.png"` : e.img;
		result += `	<div class="contact-item">
							<img class="news-image" src="${img}"/>
							<div class="contact-item-info">
								<div class="contact-info-discord">${e.title}</div>
								<div class="contact-info-status">${e.data}</div>
								<div class="contact-info-desc">${e.text}</div>
							</div>
						</div>
		`;
		
		return result;
	},
	
	getRules: function(e)
	{
		let result = `<div class="rules-heading">${e.title}</div>`;
		e.text.forEach((x) =>
		{
			result += `<div class="r">
							<div class="rn">${x.n}</div>
							<div class="rt">${x.t}</div>
						</div>
			`;
		});
		return result;
	},
	
	outPreview: function()
	{		
		video_background.classList.remove('video-background-hide');
		
		mainLogo.style.width = '250px';
		mainLogo.style.height = '100px';
		warpLogo.style.top = '5px';
		serverLogo.style.width = '64px';
		serverName.style.fontSize = '18pt';
		
		BG.changeContent(BG.currentPage);
		
		setTimeout(function(){
			warpContent.style.opacity = '1';
		}, 1200);
	},
	
	onClickItemMenu: function(x)
	{
		C.circles.push(new C.cursorBubbles(C.mouse.x, C.mouse.y, 4, 2));
		BG.changeContent(x);
	},
	delay: false,
	changeContent: function(x)
	{
		if (BG.currentPage != x && !BG.delay)
		{
			BG.currentPage = x;
			BG.delay = true;
			
			document.querySelectorAll('.main-menu-item-active').forEach((e) => {
				e.classList.toggle('main-menu-item-active');
			});
			window[x+`Menu`].classList.toggle('main-menu-item-active');
			
			content.style.opacity = '0';
			content.style.top = '30px';

			setTimeout(function()
			{
				document.querySelectorAll('.warp-content').forEach((e) =>
				{
					e.style.display = 'none';
				});		
				if(x !== 'home') window[`${x}`].style.display = 'flex';

				content.style.opacity = '1';
				content.style.top = '50px';
				BG.delay = false;
			}, 250);
		}
	},
	getRandomInRange: function(min,max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
	
	music: {
	
		isMuted: false,
		currentMusic: '',

		load: function()
		{
			BG.music.randomMusic();
		},
		
		randomMusic: function()
		{
			let idx = BG.getRandomInRange(0, BG.musicList.length - 1);
			while(BG.music.currentMusic == BG.musicList[idx].name)
			{
				idx = BG.getRandomInRange(0, BG.musicList.length - 1);
			}
			BG.music.currentMusic = BG.musicList[idx].name;
			
			musicContainer.innerHTML = BG.getMusic(BG.musicList[idx]);
			
			BG.music.isMuted ? audioblock.volume = 0 : audioblock.volume = BG.volume;
			BG.music.updateIcon();			
			audioblock.play();
		},
		
		onClickMute: function()
		{
			if (BG.music.isMuted)BG.music.onUnmuted();
			else BG.music.onMuted();
		},

		onClickMix: function()
		{
			BG.music.randomMusic();
		},

		onMuted: function()
		{
			BG.volume = musicVolumeSlider.value;

			musicVolumeSlider.value = 0;
			audioblock.volume = 0;

			musicVolume.src = "assets/volume-mute.png"
			BG.music.isMuted = true;
		},

		onUnmuted: function()
		{
			musicVolumeSlider.value = BG.volume;
			audioblock.volume = BG.volume;

			BG.music.updateIcon();
			BG.music.isMuted = false;
		},

		updateIcon: function()
		{
			if (BG.volume <= 0) musicVolume.src = "assets/volume-mute.png";
			else if(BG.volume < 0.5) musicVolume.src = "assets/volume-low.png";
			else musicVolume.src = "assets/volume-loud.png";
		},

		onChangeVolume: function(value)
		{
			BG.volume = value;
			audioblock.volume = value;
			if(BG.music.isMuted == true && value > 0) BG.music.isMuted = false;			
			BG.music.updateIcon();
		},

		onChangeVolumeMouseSlider: function(event, value)
		{
			if(event.buttons == 1) BG.music.onChangeVolume(value);
		}
	},
	loadProgress: {
		
		count: 0,
		thisCount: 0,
		
		handlers: 
		{
			startInitFunctionOrder(data) 
			{
				BG.loadProgress.count = data.count;
			},
			
			initFunctionInvoking(data) 
			{
				let localdata = ((data.idx / BG.loadProgress.count) * 100);
				BG.loadProgress.updateProgress(localdata);
			},
			
			startDataFileEntries(data) 
			{
				BG.loadProgress.count = data.count;
			},
			
			performMapLoadFunction(data) 
			{
				++BG.loadProgress.thisCount;
				let localdata = ((BG.loadProgress.thisCount / BG.loadProgress.count) * 100);
				BG.loadProgress.updateProgress(localdata);
			}
		},
		
		updateProgress: function(data)
		{
			progressBar.style.left = '0%';
			progressBar.style.width = data + '%';
		},
		
		onStart: function()
		{
			window.addEventListener('message', (e) => 
			{
				(BG.loadProgress.handlers[e.data.eventName] || function() { })(e.data);
			});
		}
	}
};

var C = {
	
	canvas: null,
	ct: null,
	circles: [],
	mouse: { x: 1000, y: 1000 },
	
	colorsMouse: [
		"rgba(255,200,100, x)"
	],
	
	loadCursor: function()
	{
		C.canvas = document.querySelector("canvas");
		C.canvas.width = innerWidth;
		C.canvas.height = innerHeight;
		C.ct = C.canvas.getContext("2d");
		C.mouse = { x: innerWidth / 2, y: innerHeight / 2 };		

		window.addEventListener("mousemove", function (e) 
		{
			cursor.style.left = e.x + "px";
			cursor.style.top = e.y + "px";
			C.mouse.x = e.x;
			C.mouse.y = e.y;
		});
		
		window.addEventListener("resize", function () 
		{
			C.canvas.width = innerWidth;
			C.canvas.height = innerHeight;
		});
		
		//C.circles.push(new C.cursorBubbles(C.mouse.x, C.mouse.y, 10, 5));
		
		C.animation(C.mouse.x, C.mouse.y);
	},
	
	cursorBubbles: function(x, y, r, growth, rand)
	{
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = C.colorsMouse[Math.floor(Math.random() * C.colorsMouse.length)];
		this.alpha = 1;
		
		this.draw = function () 
		{
			C.ct.beginPath();
			C.ct.strokeStyle = this.color.replace("x", + this.alpha);
			C.ct.arc(this.x, this.y, this.r, Math.PI * 2, false);
			C.ct.lineWidth = 2;
			C.ct.stroke();
			C.ct.fillStyle = "transparent";
			C.ct.fill();			
		};

		this.update = function () 
		{
			this.alpha -= 0.070;
			this.r += growth;
			this.draw();
		};
	},
	
	animation: function()
	{
		requestAnimationFrame(C.animation);
		C.ct.clearRect(0, 0, innerWidth, innerHeight);
		
		//var r = Math.random() * 3 + 4;
		//C.circles.push(new C.cursorBubbles(C.mouse.x, C.mouse.y, r, -0.5));

		for (let i = 0; i < C.circles.length; ++i)
		{
			C.circles[i].update();
			if (C.circles[i].alpha < 0 || C.circles[i].r < 2) C.circles.splice(i, 1);		
			
		}
	}	
};
