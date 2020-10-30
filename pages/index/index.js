Page({
  data: {
    isPlayingMusic: false
  },
  bgm: null,
  music_url: 'https://m10.music.126.net/20201028110402/393d03ed872518bc9987d6c8b7840512/yyaac/535d/015b/020f/d75856bd296134f9253d5e9c35d1ac7b.m4a',
  music_coverImgUrl: 'http://localhost:3000/cover.jpg',
  onReady: function() {
    // 创建getBackgroundAudioManager实例对象
    this.bgm = wx.getBackgroundAudioManager()
    // 音频标题
    this.bgm.title = 'merry me'
    // 专辑名称
    this.bgm.epname = 'wedding'
    // 歌手名
    this.bgm.singer = 'singer'
    // 专辑封面
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    // 指定音频的数据源
    this.bgm.src = this.music_url
  },
  // 播放器的单击事件
  play: function() {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  // 一键拨打电话
  // 新郎电话
  callGroom: function() {
    wx.makePhoneCall({
      phoneNumber: '13700000000'
    })
  },
  // 新娘电话
  callBride: function() {
    wx.scanCode({
      onlyFromCamera: 'true'
    })
  }
})