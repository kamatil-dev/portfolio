export default defineNuxtPlugin(() => {
  const CurrentLocale: any = useCookie("CurrentLocale");
  if (!CurrentLocale.value) CurrentLocale.value = "en";
  const messages: any = {
    en: {
      app_name: "Kamatil",
      locales: {
        ar: "Arabic",
        en: "English",
        fr: "French",
      },
      menu: {
        index: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      sections: {
        hero: {
          content: {
            1: "Hi there",
            2: "My name is Karim",
            3: "A FullStack",
            4: "Web Developer",
          },
        },
        about: {
          title: "Who am I?",
          content: `<p>
                                I am currently a medical student ${
                                  Number(new Date().getFullYear()) - 2019 > 7
                                    ? "who finished their studies"
                                    : "in my " +
                                      (Number(new Date().getFullYear()) -
                                        2019) +
                                      " year"
                                }, but before I reached this I was fond of programming from childhood, and I worked in several fields, from programming games to programming websites and then mobile applications
                                </p><p>
                                The PHP language was the first software language to get to know (of course I do not consider html a programming language Haha) This language did not attract me to it was the logic only, I loved the logic of IF and Else!
                                </p><p>
                                In the year 2018 I got my first amount from the Internet and I still remember It was from a client from Qatar. She wanted me to create an online store for her and this was through the KHAMSAT platform (my account was closed in it due to the lack of my knowledge of their work policy), the first pay cash i got made me very happy and I discovered at the time that my talent generates an income And I proved to my family that all the holidays and the leisure time I were spending in front of the computer screen instead of playing and going out with the family on events were feasible.
                                </p><p>
                                Currently, I worked on several projects, including small and even huge projects, which, thank God, were satisfied with the consent of my clients, who I still communicate with and help them as I can, and develop these relationships from work to friendship over time
                                </p><p>
                                I always try to not indulge in the projects of others and forget the self development -which enables me to get to where I am now-, and this is what I have been able to preserve, because I always try to work on personal projects, including complicated, and the simple ones, and every time I learn new languages ​​and try to improve my old projects, currently the biggest topic I have been focused on is to accelerate the performance of the codes I write, and I look for a way to simplify them as much as possible.
                                </p><p>
                                Currently, I'm open to new opportunities where I can contribute my skills to help companies achieve their goals.
                              </p>`,
        },
        contact: {
          title: "Get in touch with me",
          content:
            "I'm seeking opportunities to work with companies that can improve my skills not just in tech but also to be able to learn to lead and teach others.If I am the person you are looking for, feel free to reach me through email or my contact information in my resume.",
          buttons: {
            resume: "My Resume",
            email: "Email Me",
            phone: "Whatsapp",
          },
        },
        skills: {
          title: "Technologies & Framework",
        },
        projects: {
          title: "Projects That I Have Worked On",
        },
        hobbies: {
          title: "Some of My Favourite Activities",
          content: [
            {
              title: "Drink Black tea",
              content: "Best way to start the morning",
            },
            {
              title: "Study",
              content: "Reading medical books",
            },
            {
              title: "Grocery Shopping",
              content: "Buy some of my favourite snacks",
            },
            {
              title: "Listening to music",
              content: "Recent favourites: Alec Benjamin, Moroccan Rap",
            },
          ],
        },
        footer: {
          copyright: "© 2022 - Present KAMATIL. All rights reserved.",
        },
      },
    },
    ar: {
      app_name: "كاماتيل",
      locales: {
        ar: "العربية",
        en: "الإنجليزية",
        fr: "الفرنسية",
      },
      menu: {
        index: "الرئيسية",
        about: "من انا؟",
        skills: "المهارات",
        projects: "المشاريع",
        contact: "تواصل معي",
      },
      sections: {
        hero: {
          content: {
            1: "مرحباً",
            2: "إسمي كريم",
            3: "مطور مواقع",
            4: "وتطبيقات",
          },
        },
        about: {
          title: "من أنا؟",
          content: `<p>
                                انا حالياً طالب طب ${
                                  Number(new Date().getFullYear()) - 2019 > 7
                                    ? "أنهيت دراستي"
                                    : "في سنتي الـ " +
                                      (Number(new Date().getFullYear()) - 2019)
                                }، لكن قبل ان اصل لهذا كنت مولوع بالبرمجة منذ الطفولة، وإشتغلت في عدة ميادين، من برمجة العاب إلى برمجة مواقع ويب وثم تطبيقات الهاتف
                                </p><p>
                                لغة PHP ، كانت اول لغة برمجية أتعرف عليها (طبعا لا اعتبر HTML  لغة برمجة هاها) هذه اللغة ما جذبني إليها كان المنطق فقط، احببت منطق IF و ELSE !
                                </p><p>
                                سنة ٢٠١٨ حصلت على أول مبلغ لي من الأنترنت ولازلت اتذكر كانت عميلة من قطر طلبت مني إنشاء متجر إلكتروني وكان هذا عبر منصة KHAMSAT (تم إغلاق حسابي فيها نظراً لعدم درايتي بسياسة العمل لديهم) ، اول مبلغ احصل عليه أسعدني جداً وإكتشفت حينها ان موهبتي تدر دخل وأثبتت لعائلتي ان كل العطل و أوقات الفراغ التي كنت اقضيها امام شاشة الحاسوب بدل اللعب والخروج مع العائلة في المناسبات كان لها جدوى
                                </p><p>
                                حالياً عمِلت على عدة مشاريع منها الصغيرة وحتى المشاريع الضخمة والتي بحمد لله كانت تنال رضى عملائي والذين لازلت اتواصل معهم واساعدهم فيما استطيع وتتطورهذه العلاقات من عمل إلى صداقة مع الوقت
                                </p><p>
                                أحاول دائماً ان لا انغمس في مشاريع الغير وانسى تطوير ذاتي، وهذا ما استطعت المحافظة عليه، فأنا دائما اعمل على مشاريع شخصية منها المعقدة ومنها البسيطة السهلة، وفي كل مرة اتعلم لغات جديدة واحاول التطوير من القديمة، حالياً اكبر موضوع صرت اركز عليه هو تسريع أداء الأكواد التي اقوم بكتابتها، وابحث عن طريقة تبسيطها قدر المستطاع
                                </p><p>
                                حاليًا ، أنا منفتح على فرص جديدة حيث يمكنني المساهمة بمهاراتي لمساعدة الشركات على تحقيق أهدافها.
                              </p>`,
        },
        contact: {
          title: "تواصل معي",
          content:
            "أبحث عن فرص للعمل مع الشركات التي يمكنها تحسين مهاراتي ، ليس فقط في التكنولوجيا ولكن أيضًا لأتمكن من تعلم قيادة الآخرين وتعليمهم. إذا كنت الشخص الذي تبحث عنه ، فلا تتردد في التواصل معي عبر البريد الإلكتروني أو رسالة نصية على الواتس أب.",
          buttons: {
            resume: "سيرتي",
            email: "بريدي",
            phone: "واتس أب",
          },
        },
        skills: {
          title: "الإطارات ولغات البرمجة",
        },
        projects: {
          title: "مشاريع إشتغلت عليها",
        },
        hobbies: {
          title: "Some of My Favourite Activities",
          content: [
            {
              title: "الشاي الأسود",
              content: "أفضل مشروب أبدء به يومي",
            },
            {
              title: "الدراسة",
              content: "قِرائة الكتب الطبية",
            },
            {
              title: "التسوق",
              content: "أحب شراء مأكولاتي المفضلة",
            },
            {
              title: "الموسيقى",
              content: "أحب كلا النوعين, الهادئ و الصاخب",
            },
          ],
        },
        footer: {
          copyright: "© 2022 - الأن, جميع الحقوق محفوظة لـKAMATIL",
        },
      },
    },
    fr: {
      app_name: "KAMATIL",
      locales: {
        ar: "Arabic",
        en: "Anglais",
        fr: "Français",
      },
      menu: {
        index: "Accueil",
        about: "Qui suis-je?",
        skills: "compétences",
        projects: "Projets",
        contact: "Contactez-moi",
      },
      sections: {
        hero: {
          content: {
            1: "Bonjour",
            2: "Je m'appelle Karim",
            3: "Développeur Web",
            4: "Fullstack",
          },
        },
        about: {
          title: "Qui suis-je?",
          content: `<p>
                        Je suis actuellement ${
                          Number(new Date().getFullYear()) - 2019 > 7
                            ? "Médcin qui a terminé ses études "
                            : "étudiant en " +
                              (Number(new Date().getFullYear()) - 2019) +
                              "éme année médecine"
                        }, j'ai aimé la programmation avant d'integrer la médecine et depuis mon trés bas age, j'ai travaillé dans plusieurs domaines, en partant de programmation des jeux video simple jusqu'a la realisation des sitesweb et des applications mobile
                        </ p> <p>
                        Le langage PHP a été le premier langage de programmation que j'ai appris (bien sûr, je ne considère pas HTML comme un langage de programmation haha) Ce langage m'a attiré par sa logique, j'ai adoré la logique de SI(IF) et SINON(ELSE)!
                        </ p> <p>
                        En 2018, j'ai obtenu mon premier montant sur Internet d'une cliente Qatariénne, qui m'avais demandé de lui créer un magasin en ligne et c'était via la plate-forme nommée KHAMSAT (mon compte était fermé en raison de l'ignorance de leur politique de travail). J'étais hyper content en touchant ce premier montant et j'ai découvert à l'époque que mon talent génère un revenu et j'ai prouvé à ma famille que toutes les vacances et le temps de loisir que je passais devant l'écran de l'ordinateur tout en me privant de jouer et de sortir en famille, a semé ses graines.
                        </ p> <p>
                        Actuellement, je travaille sur quelques petits projets, même de gros, dont obtiénnent la satistfaction de mes clients, de ceux avec qui je communique encore et je les aide en permancance, au fil de temps les relations évoluent du travail à l'amitié.  
                        </ p> <p>
                        J'essaie toujours de ne pas se livrer aux projets des autres et d'oublier l'auto-développement, et c'est ce que j'ai pu maintenir, je travaille en permanance sur des projets personnels qui sont compliqués et ou faciles, et à chaque fois j'apprends de nouvelles langues et j'éssaie de developper l'ancien. En ce moment le plus grand sujet sur lequel je me concentre et d'accélérer la performance des codes que j'écris, et de trouver comment les simplifier autant que possible 
                        </ p> <p>
                        Actuellement, je suis ouvert à de nouvelles opportunités où je peux apporter mes compétences pour aider les entreprises à atteindre leurs objectifs.
                      </ p> `,
        },
        contact: {
          title: "Contactez- moi",
          content:
            "Je recherche des opportunités de travailler avec des entreprises qui peuvent améliorer mes compétences, non seulement dans la technologie mais aussi pour apprendre à diriger et à enseigner aux autres.Si je suis la personne que vous recherchez, n'hésitez pas à m'envoyer un e-mail ou un message Whatsapp. ",
          buttons: {
            resume: "Mon CV",
            email: "Mon émail",
            phone: "WhatsApp",
          },
        },
        skills: {
          title: "Technologies et langages de programmation",
        },
        projects: {
          title: "Projets sur lesquels j'ai travaillé",
        },
        hubbies: {
          title: "Certaines de mes activités préférées",
          content: [
            {
              title: "Boire du Thé",
              content: "Meilleur district je commence quotidiennement",
            },
            {
              title: "Lire",
              content: "Lire des livres médicaux",
            },
            {
              title: "Courses",
              content: "J'aime acheter mes aliments préférés",
            },
            {
              title: "Musique",
              content: "J'adore les deux types, calme et bruyant",
            },
          ],
        },
        footer: {
          copyright: "© 2022 - Présent KAMATIL. Tous les droits sont réservés.",
        },
      },
    },
  };
  const get = (t: Object, path: String) =>
    path.split(".").reduce((r: any, k) => r?.[k], t);
  return {
    provide: {
      t: (dot: String) => get(messages[CurrentLocale.value], dot) || dot,
      availableLocales: ["ar", "en", "fr"],
      setLocale: (lang: string) => (CurrentLocale.value = lang),
      CurrentLocale: CurrentLocale.value,
    },
  };
});
