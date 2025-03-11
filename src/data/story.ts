import { Story } from '../types/story';

export const story: Story = {
  startScene: 'cafe_entrance',
  scenes: {
    cafe_entrance: {
      id: 'cafe_entrance',
      text: '僕：「こんなところにカフェが…？」\nのあ：「いらっしゃいませ。お客様。」\n僕：「あ、こんにちは。こんな時間に営業してるんですね。」\nのあ：「はい。ここは夜だけのカフェです。お客様をお待ちしています。」\n僕：「夜だけ？ちょっと不思議な感じですね。」\nのあ：「ふふ。そうですね。でも、ここには来るべき人しか来ませんから。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'どういう意味ですか？',
          nextScene: 'cafe_meaning'
        },
        {
          text: 'このカフェ、いつから営業しているんですか？',
          nextScene: 'cafe_history'
        }
      ]
    },
    cafe_meaning: {
      id: 'cafe_meaning',
      text: 'のあ：「あら、気になりますか？ここはただのカフェじゃないんです。夜の間に、何かを求める人が集まる場所なんです。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'お客さん、みんななんだか不思議な雰囲気ですね。',
          nextScene: 'customer_secrets'
        }
      ]
    },
    cafe_history: {
      id: 'cafe_history',
      text: 'のあ：「ふふ、長いことやっているんですよ。時々、誰も来ない日もありますけれど、それでも営業を続けているんです。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'お客さん、みんななんだか不思議な雰囲気ですね。',
          nextScene: 'customer_secrets'
        }
      ]
    },
    customer_secrets: {
      id: 'customer_secrets',
      text: '僕：「お客さん、みんななんだか不思議な雰囲気ですね。」\nのあ：「ええ。みんな、何かしらの秘密を抱えているんですよ。でも、それは決して悪いことではないんです。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '秘密？それってどういうこと？',
          nextScene: 'secrets_explanation'
        },
        {
          text: 'でも、何か隠し事があるのは少し怖いな。',
          nextScene: 'secrets_reassurance'
        }
      ]
    },
    secrets_explanation: {
      id: 'secrets_explanation',
      text: 'のあ：「例えば…悩みや痛みを抱えているけれど、どうしても他の人に言えないこと。だから、ここに来て少しでも癒されようとするんです。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'ちょっと気になることがあって。',
          nextScene: 'first_mystery'
        }
      ]
    },
    secrets_reassurance: {
      id: 'secrets_reassurance',
      text: 'のあ：「ふふ、怖がらないでください。秘密を抱えることは悪いことじゃないんです。むしろ、それを解き放つ場所でもありますから。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'ちょっと気になることがあって。',
          nextScene: 'first_mystery'
        }
      ]
    },
    first_mystery: {
      id: 'first_mystery',
      text: '僕：「ちょっと気になることがあって。」\nのあ：「何かしら？」\n僕：「このカフェの客はみんな、どこか寂しそうな表情をしているような…」\nのあ：「それは、このカフェが人々の『心の隙間』を埋める場所だからです。だからこそ、少しだけ悲しげな表情をしているんでしょうね。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '僕も、ここで癒されるような気がする。',
          nextScene: 'healing_feeling'
        },
        {
          text: 'でも、みんなが隠している秘密って…',
          nextScene: 'secrets_charm'
        }
      ]
    },
    healing_feeling: {
      id: 'healing_feeling',
      text: 'のあ：「嬉しいです。ここで過ごす時間が、少しでもあなたの心を癒せたらと思っています。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '客Aの話を聞く',
          nextScene: 'customer_a'
        }
      ]
    },
    secrets_charm: {
      id: 'secrets_charm',
      text: 'のあ：「それが、またこのカフェの魅力なんです。秘密があるからこそ、人は変わることができる。そう信じています。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '客Aの話を聞く',
          nextScene: 'customer_a'
        }
      ]
    },
    customer_a: {
      id: 'customer_a',
      text: '（女性）：「（独り言）どうして私だけ…」\n僕：「何かお困りですか？」\n客A：「…少し、話を聞いてもらえますか？」\nのあ：「もちろんです。ゆっくりお話してください。」\n客A：「実は…」\n（客Aは、仕事での人間関係の悩み、特に同僚からの嫉妬について語る。）',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'それは辛いですね。何かできることはありますか？',
          nextScene: 'customer_a_help'
        },
        {
          text: 'もしかしたら、誤解かもしれませんよ？',
          nextScene: 'customer_a_misunderstanding'
        }
      ]
    },
    customer_a_help: {
      id: 'customer_a_help',
      text: 'のあ：「そうですね…。例えば、彼女のいいところを見つけて、褒めてみてはどうでしょう？意外と、それが解決の糸口になるかもしれません。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '客Bの話を聞く',
          nextScene: 'customer_b'
        }
      ]
    },
    customer_a_misunderstanding: {
      id: 'customer_a_misunderstanding',
      text: '客A：「誤解…？でも、彼女の態度を見ていると、どうしてもそうは思えなくて…。」\n僕：「一度、直接話してみるのもいいかもしれません。勇気がいるかもしれませんが…。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '客Bの話を聞く',
          nextScene: 'customer_b'
        }
      ]
    },
    customer_b: {
      id: 'customer_b',
      text: '客B（男性）：「…昔は、もっと上手くやれたはずなのに。」\n僕：「何かあったんですか？」\n客B：「昔の夢を諦めて、今は普通のサラリーマンをしているんだ。でも、時々、あの頃の情熱が忘れられなくて…。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '夢を諦めるのは辛いですよね。',
          nextScene: 'customer_b_dream'
        },
        {
          text: '今からでも、遅くはないんじゃないですか？',
          nextScene: 'customer_b_encouragement'
        }
      ]
    },
    customer_b_dream: {
      id: 'customer_b_dream',
      text: 'のあ：「そうですね。でも、夢を諦めたからこそ、見えてくるものもあるかもしれません。今の生活の中で、新しい目標を見つけてみるのもいいかもしれません。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '客Cの話を聞く',
          nextScene: 'customer_c'
        }
      ]
    },
    customer_b_encouragement: {
      id: 'customer_b_encouragement',
      text: '客B：「…そうかもしれませんね。でも、家族もいるし、現実を考えると…。」\n僕：「まずは、小さなことから始めてみませんか？例えば、週末に趣味のサークルに参加してみるとか。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: '客Cの話を聞く',
          nextScene: 'customer_c'
        }
      ]
    },
    customer_c: {
      id: 'customer_c',
      text: '（少女）：「…誰にも言えないの。」\n僕：「どうしたの？何かあった？」\n客C：「学校で、友達に仲間はずれにされてて…。でも、親にも先生にも言えなくて…。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'それは、とても辛いね。',
          nextScene: 'customer_c_comfort'
        },
        {
          text: '何か、きっかけがあったの？',
          nextScene: 'customer_c_reason'
        }
      ]
    },
    customer_c_comfort: {
      id: 'customer_c_comfort',
      text: 'のあ：「あなたは、決して一人じゃないわ。ここにいる私たちは、あなたの味方だから。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'のあの告白を聞く',
          nextScene: 'noa_confession'
        }
      ]
    },
    customer_c_reason: {
      id: 'customer_c_reason',
      text: '客C：「…たぶん、私が少し変わったから。前よりも、自分の意見を言うようになったから…。」\n僕：「自分の意見を言うことは、決して悪いことじゃない。でも、もしかしたら、伝え方が少し強かったのかもしれないね。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_normal.png',
      choices: [
        {
          text: 'のあの告白を聞く',
          nextScene: 'noa_confession'
        }
      ]
    },
    noa_confession: {
      id: 'noa_confession',
      text: '僕：「のあさん、最近少し元気がないように見えますが、何かありましたか？」\nのあ：「…実は、少し話したいことがあります。」\n僕：「はい、いつでも聞きますよ。」\nのあ：「…私は、このカフェでずっと人々の悩みを聞いてきましたが、実は自分自身も大きな秘密を抱えているんです。」\n（のあは、自分が過去に大きな心の傷を負ったこと、そしてその傷が今も癒えていないことを打ち明ける。カフェを始めた理由も、自分の心の癒しを求めてのことだったと語る。）\n僕：「そんなことがあったんですね…。今まで辛かったでしょう。」\nのあ：「…でも、あなたに話せて、少しずつ変わることができました。」',
      background: '/backgrounds/cafe_interior.jpg',
      character: '/characters/noa_sad.png',
      choices: [
        {
          text: 'あなたの秘密を、もっと聞かせてください。',
          nextScene: 'true_ending'
        },
        {
          text: '今は、そっとしておきます。',
          nextScene: 'normal_ending'
        }
      ]
    },
    true_ending: {
      id: 'true_ending',
      text: 'のあ：「小さい頃から、ずっと孤独でした。両親は仕事で忙しく、いつも一人で過ごしていました。」\nのあ：「学校でも、なかなか友達ができなくて…。いつも周りの子たちの輪に入れず、自分の居場所がないように感じていました。」\n僕：「…辛かったでしょう。」\nのあ：「はい。心がいつも冷たくて、誰にも理解してもらえないと思っていました。そんな時、偶然この場所を見つけたんです。昔からあった古いカフェで、誰も寄り付かない、ひっそりとした場所でした。」\nのあ：「なぜか、その場所に強く惹かれました。そして、自分の手でこのカフェを再開させることにしたんです。同じように、心の傷を抱えた人たちが集まれる場所を作りたかった。私自身の癒しでもありました。」\n僕：「…のあさん…。」\nのあ：「でも、あなたに出会って、少しずつ変わることができました。あなたは、私の心の壁を壊して、温かい光を照らしてくれた。だから、あなたには、全部話したかったんです。」\n僕：「…（のあの手を握る）。もう一人で抱え込まないでください。これからは、僕が一緒にいます。」\nのあ：「…はい。ありがとうございます。あなたがいるから、私はきっと大丈夫です。」\n\n二人は、互いの心の傷を癒し合い、共に未来へ向かって歩んでいくことを誓う。カフェは訪れる人々に更なる癒しを与える場所となる。',
      background: '/backgrounds/cafe_interior.jpg',
      choices: [
        {
          text: 'ゲームを終了する',
          nextScene: 'game_over'
        }
      ]
    },
    normal_ending: {
      id: 'normal_ending',
      text: '数日後、のあは突然カフェから姿を消した。\n\n僕：「のあさん、どこへ行ったんですか？」見慣れない女性店員に尋ねる。\n女性店員：「…のあなら、もうここにはいませんよ。『自分の居場所はない』と言い残して、どこかへ行ってしまったそうです。」\n僕：「そんな…。」\n（「僕」は、のあの面影を探すように店内を見回す。しかし、のあの姿はどこにもなく、二度と会うことはなかった。）\n僕：「結局、彼女はどこへ行ってしまったんだろう…。」',
      background: '/backgrounds/cafe_interior.jpg',
      choices: [
        {
          text: 'ゲームを終了する',
          nextScene: 'game_over'
        }
      ]
    },
    game_over: {
      id: 'game_over',
      text: '',
      background: '/backgrounds/cafe_interior.jpg',
      choices: []
    }
  }
}; 