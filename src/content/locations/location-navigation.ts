export interface LocationNavCity { label: { en: string; ar: string }; href: string; }
export interface LocationNavRegion { key: string; label: { en: string; ar: string }; href: string; curriculum: LocationNavCity; cities: LocationNavCity[]; }
export interface LocationNavCountry { key: string; label: { en: string; ar: string }; href: string; regions: LocationNavRegion[]; }

export const locationNavigation: LocationNavCountry[] = [
  {
    "key": "canada",
    "label": {
      "en": "Canada",
      "ar": "كندا"
    },
    "href": "/locations/canada",
    "regions": [
      {
        "key": "ontario",
        "label": {
          "en": "Ontario",
          "ar": "أونتاريو"
        },
        "href": "/locations/canada/ontario",
        "curriculum": {
          "label": {
            "en": "Ontario Curriculum",
            "ar": "منهج أونتاريو"
          },
          "href": "/locations/canada/ontario/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Toronto",
              "ar": "تورونتو"
            },
            "href": "/locations/canada/ontario/toronto"
          },
          {
            "label": {
              "en": "Mississauga",
              "ar": "ميسيساغا"
            },
            "href": "/locations/canada/ontario/mississauga"
          },
          {
            "label": {
              "en": "Brampton",
              "ar": "برامبتون"
            },
            "href": "/locations/canada/ontario/brampton"
          },
          {
            "label": {
              "en": "Milton",
              "ar": "ميلتون"
            },
            "href": "/locations/canada/ontario/milton"
          },
          {
            "label": {
              "en": "Ottawa",
              "ar": "أوتاوا"
            },
            "href": "/locations/canada/ontario/ottawa"
          },
          {
            "label": {
              "en": "Hamilton",
              "ar": "هاميلتون"
            },
            "href": "/locations/canada/ontario/hamilton"
          },
          {
            "label": {
              "en": "London",
              "ar": "لندن"
            },
            "href": "/locations/canada/ontario/london"
          },
          {
            "label": {
              "en": "Oakville",
              "ar": "أوكفيل"
            },
            "href": "/locations/canada/ontario/oakville"
          },
          {
            "label": {
              "en": "Windsor",
              "ar": "ويندسور"
            },
            "href": "/locations/canada/ontario/windsor"
          },
          {
            "label": {
              "en": "Kitchener",
              "ar": "كيتشنر"
            },
            "href": "/locations/canada/ontario/kitchener"
          }
        ]
      },
      {
        "key": "quebec",
        "label": {
          "en": "Quebec",
          "ar": "كيبيك"
        },
        "href": "/locations/canada/quebec",
        "curriculum": {
          "label": {
            "en": "Quebec Curriculum",
            "ar": "منهج كيبيك"
          },
          "href": "/locations/canada/quebec/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Montreal",
              "ar": "مونتريال"
            },
            "href": "/locations/canada/quebec/montreal"
          },
          {
            "label": {
              "en": "Laval",
              "ar": "لافال"
            },
            "href": "/locations/canada/quebec/laval"
          },
          {
            "label": {
              "en": "Quebec City",
              "ar": "مدينة كيبيك"
            },
            "href": "/locations/canada/quebec/quebec-city"
          },
          {
            "label": {
              "en": "Gatineau",
              "ar": "غاتينو"
            },
            "href": "/locations/canada/quebec/gatineau"
          },
          {
            "label": {
              "en": "Longueuil",
              "ar": "لونغوي"
            },
            "href": "/locations/canada/quebec/longueuil"
          },
          {
            "label": {
              "en": "Brossard",
              "ar": "بروسار"
            },
            "href": "/locations/canada/quebec/brossard"
          },
          {
            "label": {
              "en": "Sherbrooke",
              "ar": "شيربروك"
            },
            "href": "/locations/canada/quebec/sherbrooke"
          }
        ]
      },
      {
        "key": "alberta",
        "label": {
          "en": "Alberta",
          "ar": "ألبرتا"
        },
        "href": "/locations/canada/alberta",
        "curriculum": {
          "label": {
            "en": "Alberta Curriculum",
            "ar": "منهج ألبرتا"
          },
          "href": "/locations/canada/alberta/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Calgary",
              "ar": "كالغاري"
            },
            "href": "/locations/canada/alberta/calgary"
          },
          {
            "label": {
              "en": "Edmonton",
              "ar": "إدمونتون"
            },
            "href": "/locations/canada/alberta/edmonton"
          },
          {
            "label": {
              "en": "Red Deer",
              "ar": "ريد دير"
            },
            "href": "/locations/canada/alberta/red-deer"
          },
          {
            "label": {
              "en": "Lethbridge",
              "ar": "ليثبريدغي"
            },
            "href": "/locations/canada/alberta/lethbridge"
          },
          {
            "label": {
              "en": "Fort McMurray",
              "ar": "فورت مكمورراي"
            },
            "href": "/locations/canada/alberta/fort-mcmurray"
          }
        ]
      },
      {
        "key": "british-columbia",
        "label": {
          "en": "British Columbia",
          "ar": "بريتيش كولومبيا"
        },
        "href": "/locations/canada/british-columbia",
        "curriculum": {
          "label": {
            "en": "British Columbia Curriculum",
            "ar": "منهج بريتيش كولومبيا"
          },
          "href": "/locations/canada/british-columbia/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Vancouver",
              "ar": "فانكوفر"
            },
            "href": "/locations/canada/british-columbia/vancouver"
          },
          {
            "label": {
              "en": "Surrey",
              "ar": "ساري"
            },
            "href": "/locations/canada/british-columbia/surrey"
          },
          {
            "label": {
              "en": "Burnaby",
              "ar": "برنابي"
            },
            "href": "/locations/canada/british-columbia/burnaby"
          },
          {
            "label": {
              "en": "Richmond",
              "ar": "ريتشموند"
            },
            "href": "/locations/canada/british-columbia/richmond"
          },
          {
            "label": {
              "en": "Coquitlam",
              "ar": "كوكويتلام"
            },
            "href": "/locations/canada/british-columbia/coquitlam"
          },
          {
            "label": {
              "en": "Victoria",
              "ar": "فيكتوريا"
            },
            "href": "/locations/canada/british-columbia/victoria"
          },
          {
            "label": {
              "en": "Kelowna",
              "ar": "كيلوونا"
            },
            "href": "/locations/canada/british-columbia/kelowna"
          }
        ]
      },
      {
        "key": "manitoba",
        "label": {
          "en": "Manitoba",
          "ar": "مانيتوبا"
        },
        "href": "/locations/canada/manitoba",
        "curriculum": {
          "label": {
            "en": "Manitoba Curriculum",
            "ar": "منهج مانيتوبا"
          },
          "href": "/locations/canada/manitoba/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Winnipeg",
              "ar": "وينيبيغ"
            },
            "href": "/locations/canada/manitoba/winnipeg"
          },
          {
            "label": {
              "en": "Brandon",
              "ar": "براندون"
            },
            "href": "/locations/canada/manitoba/brandon"
          },
          {
            "label": {
              "en": "Steinbach",
              "ar": "ستيينباتش"
            },
            "href": "/locations/canada/manitoba/steinbach"
          }
        ]
      },
      {
        "key": "saskatchewan",
        "label": {
          "en": "Saskatchewan",
          "ar": "ساسكاتشوان"
        },
        "href": "/locations/canada/saskatchewan",
        "curriculum": {
          "label": {
            "en": "Saskatchewan Curriculum",
            "ar": "منهج ساسكاتشوان"
          },
          "href": "/locations/canada/saskatchewan/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Saskatoon",
              "ar": "ساسكاتون"
            },
            "href": "/locations/canada/saskatchewan/saskatoon"
          },
          {
            "label": {
              "en": "Regina",
              "ar": "ريغينا"
            },
            "href": "/locations/canada/saskatchewan/regina"
          },
          {
            "label": {
              "en": "Prince Albert",
              "ar": "برينكي البيرت"
            },
            "href": "/locations/canada/saskatchewan/prince-albert"
          }
        ]
      },
      {
        "key": "nova-scotia",
        "label": {
          "en": "Nova Scotia",
          "ar": "نوفا سكوشا"
        },
        "href": "/locations/canada/nova-scotia",
        "curriculum": {
          "label": {
            "en": "Nova Scotia Curriculum",
            "ar": "منهج نوفا سكوشا"
          },
          "href": "/locations/canada/nova-scotia/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Halifax",
              "ar": "هاليفاكس"
            },
            "href": "/locations/canada/nova-scotia/halifax"
          },
          {
            "label": {
              "en": "Dartmouth",
              "ar": "دارتموث"
            },
            "href": "/locations/canada/nova-scotia/dartmouth"
          },
          {
            "label": {
              "en": "Sydney",
              "ar": "سيدنيي"
            },
            "href": "/locations/canada/nova-scotia/sydney"
          }
        ]
      },
      {
        "key": "new-brunswick",
        "label": {
          "en": "New Brunswick",
          "ar": "نيو برونزويك"
        },
        "href": "/locations/canada/new-brunswick",
        "curriculum": {
          "label": {
            "en": "New Brunswick Curriculum",
            "ar": "منهج نيو برونزويك"
          },
          "href": "/locations/canada/new-brunswick/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Moncton",
              "ar": "مونكتون"
            },
            "href": "/locations/canada/new-brunswick/moncton"
          },
          {
            "label": {
              "en": "Fredericton",
              "ar": "فريدريكتون"
            },
            "href": "/locations/canada/new-brunswick/fredericton"
          },
          {
            "label": {
              "en": "Saint John",
              "ar": "سانت جون"
            },
            "href": "/locations/canada/new-brunswick/saint-john"
          }
        ]
      },
      {
        "key": "newfoundland-and-labrador",
        "label": {
          "en": "Newfoundland and Labrador",
          "ar": "نيوفاوندلاند ولابرادور"
        },
        "href": "/locations/canada/newfoundland-and-labrador",
        "curriculum": {
          "label": {
            "en": "Newfoundland and Labrador Curriculum",
            "ar": "منهج نيوفاوندلاند ولابرادور"
          },
          "href": "/locations/canada/newfoundland-and-labrador/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "St. John’s",
              "ar": "ست جوهنس"
            },
            "href": "/locations/canada/newfoundland-and-labrador/st-johns"
          },
          {
            "label": {
              "en": "Mount Pearl",
              "ar": "مونت بيرل"
            },
            "href": "/locations/canada/newfoundland-and-labrador/mount-pearl"
          },
          {
            "label": {
              "en": "Corner Brook",
              "ar": "كورنير بروك"
            },
            "href": "/locations/canada/newfoundland-and-labrador/corner-brook"
          }
        ]
      },
      {
        "key": "prince-edward-island",
        "label": {
          "en": "Prince Edward Island",
          "ar": "جزيرة الأمير إدوارد"
        },
        "href": "/locations/canada/prince-edward-island",
        "curriculum": {
          "label": {
            "en": "Prince Edward Island Curriculum",
            "ar": "منهج جزيرة الأمير إدوارد"
          },
          "href": "/locations/canada/prince-edward-island/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Charlottetown",
              "ar": "تشارلوتتيتوون"
            },
            "href": "/locations/canada/prince-edward-island/charlottetown"
          },
          {
            "label": {
              "en": "Summerside",
              "ar": "سومميرسيدي"
            },
            "href": "/locations/canada/prince-edward-island/summerside"
          }
        ]
      },
      {
        "key": "yukon",
        "label": {
          "en": "Yukon",
          "ar": "يوكون"
        },
        "href": "/locations/canada/yukon",
        "curriculum": {
          "label": {
            "en": "Yukon Curriculum",
            "ar": "منهج يوكون"
          },
          "href": "/locations/canada/yukon/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Whitehorse",
              "ar": "وايت هورس"
            },
            "href": "/locations/canada/yukon/whitehorse"
          }
        ]
      },
      {
        "key": "northwest-territories",
        "label": {
          "en": "Northwest Territories",
          "ar": "الأقاليم الشمالية الغربية"
        },
        "href": "/locations/canada/northwest-territories",
        "curriculum": {
          "label": {
            "en": "Northwest Territories Curriculum",
            "ar": "منهج الأقاليم الشمالية الغربية"
          },
          "href": "/locations/canada/northwest-territories/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Yellowknife",
              "ar": "يلونايف"
            },
            "href": "/locations/canada/northwest-territories/yellowknife"
          }
        ]
      },
      {
        "key": "nunavut",
        "label": {
          "en": "Nunavut",
          "ar": "نونافوت"
        },
        "href": "/locations/canada/nunavut",
        "curriculum": {
          "label": {
            "en": "Nunavut Curriculum",
            "ar": "منهج نونافوت"
          },
          "href": "/locations/canada/nunavut/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Iqaluit",
              "ar": "إيكالويت"
            },
            "href": "/locations/canada/nunavut/iqaluit"
          }
        ]
      }
    ]
  },
  {
    "key": "united-states",
    "label": {
      "en": "United States",
      "ar": "الولايات المتحدة"
    },
    "href": "/locations/united-states",
    "regions": [
      {
        "key": "alabama",
        "label": {
          "en": "Alabama",
          "ar": "ألاباما"
        },
        "href": "/locations/united-states/alabama",
        "curriculum": {
          "label": {
            "en": "Alabama Curriculum",
            "ar": "منهج ألاباما"
          },
          "href": "/locations/united-states/alabama/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Birmingham",
              "ar": "بيرمينغام"
            },
            "href": "/locations/united-states/alabama/birmingham"
          },
          {
            "label": {
              "en": "Montgomery",
              "ar": "مونتغوميري"
            },
            "href": "/locations/united-states/alabama/montgomery"
          },
          {
            "label": {
              "en": "Huntsville",
              "ar": "هونتسفيللي"
            },
            "href": "/locations/united-states/alabama/huntsville"
          }
        ]
      },
      {
        "key": "alaska",
        "label": {
          "en": "Alaska",
          "ar": "ألاسكا"
        },
        "href": "/locations/united-states/alaska",
        "curriculum": {
          "label": {
            "en": "Alaska Curriculum",
            "ar": "منهج ألاسكا"
          },
          "href": "/locations/united-states/alaska/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Anchorage",
              "ar": "انتشوراغي"
            },
            "href": "/locations/united-states/alaska/anchorage"
          },
          {
            "label": {
              "en": "Fairbanks",
              "ar": "فايربانكس"
            },
            "href": "/locations/united-states/alaska/fairbanks"
          },
          {
            "label": {
              "en": "Juneau",
              "ar": "جونيو"
            },
            "href": "/locations/united-states/alaska/juneau"
          }
        ]
      },
      {
        "key": "arizona",
        "label": {
          "en": "Arizona",
          "ar": "أريزونا"
        },
        "href": "/locations/united-states/arizona",
        "curriculum": {
          "label": {
            "en": "Arizona Curriculum",
            "ar": "منهج أريزونا"
          },
          "href": "/locations/united-states/arizona/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Phoenix",
              "ar": "فينيكس"
            },
            "href": "/locations/united-states/arizona/phoenix"
          },
          {
            "label": {
              "en": "Tucson",
              "ar": "توسان"
            },
            "href": "/locations/united-states/arizona/tucson"
          },
          {
            "label": {
              "en": "Mesa",
              "ar": "ميسا"
            },
            "href": "/locations/united-states/arizona/mesa"
          }
        ]
      },
      {
        "key": "arkansas",
        "label": {
          "en": "Arkansas",
          "ar": "أركنساس"
        },
        "href": "/locations/united-states/arkansas",
        "curriculum": {
          "label": {
            "en": "Arkansas Curriculum",
            "ar": "منهج أركنساس"
          },
          "href": "/locations/united-states/arkansas/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Little Rock",
              "ar": "ليتتلي روك"
            },
            "href": "/locations/united-states/arkansas/little-rock"
          },
          {
            "label": {
              "en": "Fayetteville",
              "ar": "فاييتتيفيللي"
            },
            "href": "/locations/united-states/arkansas/fayetteville"
          },
          {
            "label": {
              "en": "Fort Smith",
              "ar": "فورت سميث"
            },
            "href": "/locations/united-states/arkansas/fort-smith"
          }
        ]
      },
      {
        "key": "california",
        "label": {
          "en": "California",
          "ar": "كاليفورنيا"
        },
        "href": "/locations/united-states/california",
        "curriculum": {
          "label": {
            "en": "California Curriculum",
            "ar": "منهج كاليفورنيا"
          },
          "href": "/locations/united-states/california/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Los Angeles",
              "ar": "لوس أنجلوس"
            },
            "href": "/locations/united-states/california/los-angeles"
          },
          {
            "label": {
              "en": "San Diego",
              "ar": "سان دييغو"
            },
            "href": "/locations/united-states/california/san-diego"
          },
          {
            "label": {
              "en": "San Francisco",
              "ar": "سان فرانسيسكو"
            },
            "href": "/locations/united-states/california/san-francisco"
          },
          {
            "label": {
              "en": "San Jose",
              "ar": "سان خوسيه"
            },
            "href": "/locations/united-states/california/san-jose"
          },
          {
            "label": {
              "en": "Anaheim",
              "ar": "اناهييم"
            },
            "href": "/locations/united-states/california/anaheim"
          },
          {
            "label": {
              "en": "Sacramento",
              "ar": "ساكرامنتو"
            },
            "href": "/locations/united-states/california/sacramento"
          },
          {
            "label": {
              "en": "Fresno",
              "ar": "فريسنو"
            },
            "href": "/locations/united-states/california/fresno"
          }
        ]
      },
      {
        "key": "colorado",
        "label": {
          "en": "Colorado",
          "ar": "كولورادو"
        },
        "href": "/locations/united-states/colorado",
        "curriculum": {
          "label": {
            "en": "Colorado Curriculum",
            "ar": "منهج كولورادو"
          },
          "href": "/locations/united-states/colorado/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Denver",
              "ar": "دنفر"
            },
            "href": "/locations/united-states/colorado/denver"
          },
          {
            "label": {
              "en": "Aurora",
              "ar": "اورورا"
            },
            "href": "/locations/united-states/colorado/aurora"
          },
          {
            "label": {
              "en": "Colorado Springs",
              "ar": "كولورادو سبرينغس"
            },
            "href": "/locations/united-states/colorado/colorado-springs"
          }
        ]
      },
      {
        "key": "connecticut",
        "label": {
          "en": "Connecticut",
          "ar": "كونيتيكت"
        },
        "href": "/locations/united-states/connecticut",
        "curriculum": {
          "label": {
            "en": "Connecticut Curriculum",
            "ar": "منهج كونيتيكت"
          },
          "href": "/locations/united-states/connecticut/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Bridgeport",
              "ar": "بريدغيبورت"
            },
            "href": "/locations/united-states/connecticut/bridgeport"
          },
          {
            "label": {
              "en": "Hartford",
              "ar": "هارتفورد"
            },
            "href": "/locations/united-states/connecticut/hartford"
          },
          {
            "label": {
              "en": "New Haven",
              "ar": "نيو هافين"
            },
            "href": "/locations/united-states/connecticut/new-haven"
          }
        ]
      },
      {
        "key": "delaware",
        "label": {
          "en": "Delaware",
          "ar": "ديلاوير"
        },
        "href": "/locations/united-states/delaware",
        "curriculum": {
          "label": {
            "en": "Delaware Curriculum",
            "ar": "منهج ديلاوير"
          },
          "href": "/locations/united-states/delaware/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Wilmington",
              "ar": "ويلمينغتون"
            },
            "href": "/locations/united-states/delaware/wilmington"
          },
          {
            "label": {
              "en": "Dover",
              "ar": "دوفير"
            },
            "href": "/locations/united-states/delaware/dover"
          },
          {
            "label": {
              "en": "Newark",
              "ar": "نيوارك"
            },
            "href": "/locations/united-states/delaware/newark"
          }
        ]
      },
      {
        "key": "florida",
        "label": {
          "en": "Florida",
          "ar": "فلوريدا"
        },
        "href": "/locations/united-states/florida",
        "curriculum": {
          "label": {
            "en": "Florida Curriculum",
            "ar": "منهج فلوريدا"
          },
          "href": "/locations/united-states/florida/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Miami",
              "ar": "ميامي"
            },
            "href": "/locations/united-states/florida/miami"
          },
          {
            "label": {
              "en": "Orlando",
              "ar": "أورلاندو"
            },
            "href": "/locations/united-states/florida/orlando"
          },
          {
            "label": {
              "en": "Tampa",
              "ar": "تامبا"
            },
            "href": "/locations/united-states/florida/tampa"
          },
          {
            "label": {
              "en": "Jacksonville",
              "ar": "جاكسونفيللي"
            },
            "href": "/locations/united-states/florida/jacksonville"
          },
          {
            "label": {
              "en": "Fort Lauderdale",
              "ar": "فورت لاوديردالي"
            },
            "href": "/locations/united-states/florida/fort-lauderdale"
          }
        ]
      },
      {
        "key": "georgia",
        "label": {
          "en": "Georgia",
          "ar": "جورجيا"
        },
        "href": "/locations/united-states/georgia",
        "curriculum": {
          "label": {
            "en": "Georgia Curriculum",
            "ar": "منهج جورجيا"
          },
          "href": "/locations/united-states/georgia/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Atlanta",
              "ar": "أتلانتا"
            },
            "href": "/locations/united-states/georgia/atlanta"
          },
          {
            "label": {
              "en": "Savannah",
              "ar": "سافانناه"
            },
            "href": "/locations/united-states/georgia/savannah"
          },
          {
            "label": {
              "en": "Augusta",
              "ar": "اوغوستا"
            },
            "href": "/locations/united-states/georgia/augusta"
          }
        ]
      },
      {
        "key": "hawaii",
        "label": {
          "en": "Hawaii",
          "ar": "هاواي"
        },
        "href": "/locations/united-states/hawaii",
        "curriculum": {
          "label": {
            "en": "Hawaii Curriculum",
            "ar": "منهج هاواي"
          },
          "href": "/locations/united-states/hawaii/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Honolulu",
              "ar": "هونولولو"
            },
            "href": "/locations/united-states/hawaii/honolulu"
          },
          {
            "label": {
              "en": "Hilo",
              "ar": "هيلو"
            },
            "href": "/locations/united-states/hawaii/hilo"
          },
          {
            "label": {
              "en": "Kailua",
              "ar": "كايلوا"
            },
            "href": "/locations/united-states/hawaii/kailua"
          }
        ]
      },
      {
        "key": "idaho",
        "label": {
          "en": "Idaho",
          "ar": "أيداهو"
        },
        "href": "/locations/united-states/idaho",
        "curriculum": {
          "label": {
            "en": "Idaho Curriculum",
            "ar": "منهج أيداهو"
          },
          "href": "/locations/united-states/idaho/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Boise",
              "ar": "بويسي"
            },
            "href": "/locations/united-states/idaho/boise"
          },
          {
            "label": {
              "en": "Meridian",
              "ar": "ميريديان"
            },
            "href": "/locations/united-states/idaho/meridian"
          },
          {
            "label": {
              "en": "Nampa",
              "ar": "نامبا"
            },
            "href": "/locations/united-states/idaho/nampa"
          }
        ]
      },
      {
        "key": "illinois",
        "label": {
          "en": "Illinois",
          "ar": "إلينوي"
        },
        "href": "/locations/united-states/illinois",
        "curriculum": {
          "label": {
            "en": "Illinois Curriculum",
            "ar": "منهج إلينوي"
          },
          "href": "/locations/united-states/illinois/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Chicago",
              "ar": "شيكاغو"
            },
            "href": "/locations/united-states/illinois/chicago"
          },
          {
            "label": {
              "en": "Bridgeview",
              "ar": "بريدغيفييو"
            },
            "href": "/locations/united-states/illinois/bridgeview"
          },
          {
            "label": {
              "en": "Naperville",
              "ar": "نابيرفيللي"
            },
            "href": "/locations/united-states/illinois/naperville"
          },
          {
            "label": {
              "en": "Aurora",
              "ar": "اورورا"
            },
            "href": "/locations/united-states/illinois/aurora"
          }
        ]
      },
      {
        "key": "indiana",
        "label": {
          "en": "Indiana",
          "ar": "إنديانا"
        },
        "href": "/locations/united-states/indiana",
        "curriculum": {
          "label": {
            "en": "Indiana Curriculum",
            "ar": "منهج إنديانا"
          },
          "href": "/locations/united-states/indiana/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Indianapolis",
              "ar": "إنديانابوليس"
            },
            "href": "/locations/united-states/indiana/indianapolis"
          },
          {
            "label": {
              "en": "Fort Wayne",
              "ar": "فورت وايني"
            },
            "href": "/locations/united-states/indiana/fort-wayne"
          },
          {
            "label": {
              "en": "South Bend",
              "ar": "سوث بيند"
            },
            "href": "/locations/united-states/indiana/south-bend"
          }
        ]
      },
      {
        "key": "iowa",
        "label": {
          "en": "Iowa",
          "ar": "آيوا"
        },
        "href": "/locations/united-states/iowa",
        "curriculum": {
          "label": {
            "en": "Iowa Curriculum",
            "ar": "منهج آيوا"
          },
          "href": "/locations/united-states/iowa/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Des Moines",
              "ar": "ديس موينيس"
            },
            "href": "/locations/united-states/iowa/des-moines"
          },
          {
            "label": {
              "en": "Cedar Rapids",
              "ar": "كيدار رابيدس"
            },
            "href": "/locations/united-states/iowa/cedar-rapids"
          },
          {
            "label": {
              "en": "Iowa City",
              "ar": "يووا كيتي"
            },
            "href": "/locations/united-states/iowa/iowa-city"
          }
        ]
      },
      {
        "key": "kansas",
        "label": {
          "en": "Kansas",
          "ar": "كانساس"
        },
        "href": "/locations/united-states/kansas",
        "curriculum": {
          "label": {
            "en": "Kansas Curriculum",
            "ar": "منهج كانساس"
          },
          "href": "/locations/united-states/kansas/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Wichita",
              "ar": "ويتشيتا"
            },
            "href": "/locations/united-states/kansas/wichita"
          },
          {
            "label": {
              "en": "Overland Park",
              "ar": "وفيرلاند بارك"
            },
            "href": "/locations/united-states/kansas/overland-park"
          },
          {
            "label": {
              "en": "Kansas City",
              "ar": "كانساس سيتي"
            },
            "href": "/locations/united-states/kansas/kansas-city"
          }
        ]
      },
      {
        "key": "kentucky",
        "label": {
          "en": "Kentucky",
          "ar": "كنتاكي"
        },
        "href": "/locations/united-states/kentucky",
        "curriculum": {
          "label": {
            "en": "Kentucky Curriculum",
            "ar": "منهج كنتاكي"
          },
          "href": "/locations/united-states/kentucky/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Louisville",
              "ar": "لويسفيللي"
            },
            "href": "/locations/united-states/kentucky/louisville"
          },
          {
            "label": {
              "en": "Lexington",
              "ar": "ليكسينغتون"
            },
            "href": "/locations/united-states/kentucky/lexington"
          },
          {
            "label": {
              "en": "Bowling Green",
              "ar": "بوولينغ غرين"
            },
            "href": "/locations/united-states/kentucky/bowling-green"
          }
        ]
      },
      {
        "key": "louisiana",
        "label": {
          "en": "Louisiana",
          "ar": "لويزيانا"
        },
        "href": "/locations/united-states/louisiana",
        "curriculum": {
          "label": {
            "en": "Louisiana Curriculum",
            "ar": "منهج لويزيانا"
          },
          "href": "/locations/united-states/louisiana/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "New Orleans",
              "ar": "نيو أورلينز"
            },
            "href": "/locations/united-states/louisiana/new-orleans"
          },
          {
            "label": {
              "en": "Baton Rouge",
              "ar": "باتون روغي"
            },
            "href": "/locations/united-states/louisiana/baton-rouge"
          },
          {
            "label": {
              "en": "Shreveport",
              "ar": "شريفيبورت"
            },
            "href": "/locations/united-states/louisiana/shreveport"
          }
        ]
      },
      {
        "key": "maine",
        "label": {
          "en": "Maine",
          "ar": "مين"
        },
        "href": "/locations/united-states/maine",
        "curriculum": {
          "label": {
            "en": "Maine Curriculum",
            "ar": "منهج مين"
          },
          "href": "/locations/united-states/maine/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Portland",
              "ar": "بورتلاند"
            },
            "href": "/locations/united-states/maine/portland"
          },
          {
            "label": {
              "en": "Lewiston",
              "ar": "ليويستون"
            },
            "href": "/locations/united-states/maine/lewiston"
          },
          {
            "label": {
              "en": "Bangor",
              "ar": "بانغور"
            },
            "href": "/locations/united-states/maine/bangor"
          }
        ]
      },
      {
        "key": "maryland",
        "label": {
          "en": "Maryland",
          "ar": "ماريلاند"
        },
        "href": "/locations/united-states/maryland",
        "curriculum": {
          "label": {
            "en": "Maryland Curriculum",
            "ar": "منهج ماريلاند"
          },
          "href": "/locations/united-states/maryland/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Baltimore",
              "ar": "بالتيمور"
            },
            "href": "/locations/united-states/maryland/baltimore"
          },
          {
            "label": {
              "en": "Silver Spring",
              "ar": "سيلفير سبرينغ"
            },
            "href": "/locations/united-states/maryland/silver-spring"
          },
          {
            "label": {
              "en": "Rockville",
              "ar": "روكفيللي"
            },
            "href": "/locations/united-states/maryland/rockville"
          },
          {
            "label": {
              "en": "Gaithersburg",
              "ar": "غايثيرسبورغ"
            },
            "href": "/locations/united-states/maryland/gaithersburg"
          }
        ]
      },
      {
        "key": "massachusetts",
        "label": {
          "en": "Massachusetts",
          "ar": "ماساتشوستس"
        },
        "href": "/locations/united-states/massachusetts",
        "curriculum": {
          "label": {
            "en": "Massachusetts Curriculum",
            "ar": "منهج ماساتشوستس"
          },
          "href": "/locations/united-states/massachusetts/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Boston",
              "ar": "بوسطن"
            },
            "href": "/locations/united-states/massachusetts/boston"
          },
          {
            "label": {
              "en": "Worcester",
              "ar": "ووركيستير"
            },
            "href": "/locations/united-states/massachusetts/worcester"
          },
          {
            "label": {
              "en": "Springfield",
              "ar": "سبرينغفييلد"
            },
            "href": "/locations/united-states/massachusetts/springfield"
          }
        ]
      },
      {
        "key": "michigan",
        "label": {
          "en": "Michigan",
          "ar": "ميشيغان"
        },
        "href": "/locations/united-states/michigan",
        "curriculum": {
          "label": {
            "en": "Michigan Curriculum",
            "ar": "منهج ميشيغان"
          },
          "href": "/locations/united-states/michigan/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Dearborn",
              "ar": "ديربورن"
            },
            "href": "/locations/united-states/michigan/dearborn"
          },
          {
            "label": {
              "en": "Detroit",
              "ar": "ديترويت"
            },
            "href": "/locations/united-states/michigan/detroit"
          },
          {
            "label": {
              "en": "Ann Arbor",
              "ar": "انن اربور"
            },
            "href": "/locations/united-states/michigan/ann-arbor"
          },
          {
            "label": {
              "en": "Sterling Heights",
              "ar": "ستيرلينغ هييغتس"
            },
            "href": "/locations/united-states/michigan/sterling-heights"
          },
          {
            "label": {
              "en": "Grand Rapids",
              "ar": "غراند رابيدس"
            },
            "href": "/locations/united-states/michigan/grand-rapids"
          }
        ]
      },
      {
        "key": "minnesota",
        "label": {
          "en": "Minnesota",
          "ar": "مينيسوتا"
        },
        "href": "/locations/united-states/minnesota",
        "curriculum": {
          "label": {
            "en": "Minnesota Curriculum",
            "ar": "منهج مينيسوتا"
          },
          "href": "/locations/united-states/minnesota/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Minneapolis",
              "ar": "مينيابوليس"
            },
            "href": "/locations/united-states/minnesota/minneapolis"
          },
          {
            "label": {
              "en": "Saint Paul",
              "ar": "ساينت باول"
            },
            "href": "/locations/united-states/minnesota/saint-paul"
          },
          {
            "label": {
              "en": "Rochester",
              "ar": "روتشستر"
            },
            "href": "/locations/united-states/minnesota/rochester"
          }
        ]
      },
      {
        "key": "mississippi",
        "label": {
          "en": "Mississippi",
          "ar": "مسيسيبي"
        },
        "href": "/locations/united-states/mississippi",
        "curriculum": {
          "label": {
            "en": "Mississippi Curriculum",
            "ar": "منهج مسيسيبي"
          },
          "href": "/locations/united-states/mississippi/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Jackson",
              "ar": "جاكسون"
            },
            "href": "/locations/united-states/mississippi/jackson"
          },
          {
            "label": {
              "en": "Gulfport",
              "ar": "غولفبورت"
            },
            "href": "/locations/united-states/mississippi/gulfport"
          },
          {
            "label": {
              "en": "Hattiesburg",
              "ar": "هاتتييسبورغ"
            },
            "href": "/locations/united-states/mississippi/hattiesburg"
          }
        ]
      },
      {
        "key": "missouri",
        "label": {
          "en": "Missouri",
          "ar": "ميزوري"
        },
        "href": "/locations/united-states/missouri",
        "curriculum": {
          "label": {
            "en": "Missouri Curriculum",
            "ar": "منهج ميزوري"
          },
          "href": "/locations/united-states/missouri/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "St. Louis",
              "ar": "سانت لويس"
            },
            "href": "/locations/united-states/missouri/st-louis"
          },
          {
            "label": {
              "en": "Kansas City",
              "ar": "كانساس سيتي"
            },
            "href": "/locations/united-states/missouri/kansas-city"
          },
          {
            "label": {
              "en": "Springfield",
              "ar": "سبرينغفييلد"
            },
            "href": "/locations/united-states/missouri/springfield"
          }
        ]
      },
      {
        "key": "montana",
        "label": {
          "en": "Montana",
          "ar": "مونتانا"
        },
        "href": "/locations/united-states/montana",
        "curriculum": {
          "label": {
            "en": "Montana Curriculum",
            "ar": "منهج مونتانا"
          },
          "href": "/locations/united-states/montana/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Billings",
              "ar": "بيللينغس"
            },
            "href": "/locations/united-states/montana/billings"
          },
          {
            "label": {
              "en": "Missoula",
              "ar": "ميسسولا"
            },
            "href": "/locations/united-states/montana/missoula"
          },
          {
            "label": {
              "en": "Bozeman",
              "ar": "بوزيمان"
            },
            "href": "/locations/united-states/montana/bozeman"
          }
        ]
      },
      {
        "key": "nebraska",
        "label": {
          "en": "Nebraska",
          "ar": "نبراسكا"
        },
        "href": "/locations/united-states/nebraska",
        "curriculum": {
          "label": {
            "en": "Nebraska Curriculum",
            "ar": "منهج نبراسكا"
          },
          "href": "/locations/united-states/nebraska/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Omaha",
              "ar": "وماها"
            },
            "href": "/locations/united-states/nebraska/omaha"
          },
          {
            "label": {
              "en": "Lincoln",
              "ar": "لينكولن"
            },
            "href": "/locations/united-states/nebraska/lincoln"
          },
          {
            "label": {
              "en": "Bellevue",
              "ar": "بيلليفوي"
            },
            "href": "/locations/united-states/nebraska/bellevue"
          }
        ]
      },
      {
        "key": "nevada",
        "label": {
          "en": "Nevada",
          "ar": "نيفادا"
        },
        "href": "/locations/united-states/nevada",
        "curriculum": {
          "label": {
            "en": "Nevada Curriculum",
            "ar": "منهج نيفادا"
          },
          "href": "/locations/united-states/nevada/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Las Vegas",
              "ar": "لاس فيغاس"
            },
            "href": "/locations/united-states/nevada/las-vegas"
          },
          {
            "label": {
              "en": "Henderson",
              "ar": "هينديرسون"
            },
            "href": "/locations/united-states/nevada/henderson"
          },
          {
            "label": {
              "en": "Reno",
              "ar": "رينو"
            },
            "href": "/locations/united-states/nevada/reno"
          }
        ]
      },
      {
        "key": "new-hampshire",
        "label": {
          "en": "New Hampshire",
          "ar": "نيوهامبشير"
        },
        "href": "/locations/united-states/new-hampshire",
        "curriculum": {
          "label": {
            "en": "New Hampshire Curriculum",
            "ar": "منهج نيوهامبشير"
          },
          "href": "/locations/united-states/new-hampshire/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Manchester",
              "ar": "مانتشيستير"
            },
            "href": "/locations/united-states/new-hampshire/manchester"
          },
          {
            "label": {
              "en": "Nashua",
              "ar": "ناشوا"
            },
            "href": "/locations/united-states/new-hampshire/nashua"
          },
          {
            "label": {
              "en": "Concord",
              "ar": "كونكورد"
            },
            "href": "/locations/united-states/new-hampshire/concord"
          }
        ]
      },
      {
        "key": "new-jersey",
        "label": {
          "en": "New Jersey",
          "ar": "نيوجيرسي"
        },
        "href": "/locations/united-states/new-jersey",
        "curriculum": {
          "label": {
            "en": "New Jersey Curriculum",
            "ar": "منهج نيوجيرسي"
          },
          "href": "/locations/united-states/new-jersey/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Jersey City",
              "ar": "جيرسي سيتي"
            },
            "href": "/locations/united-states/new-jersey/jersey-city"
          },
          {
            "label": {
              "en": "Paterson",
              "ar": "باترسون"
            },
            "href": "/locations/united-states/new-jersey/paterson"
          },
          {
            "label": {
              "en": "Newark",
              "ar": "نيوارك"
            },
            "href": "/locations/united-states/new-jersey/newark"
          },
          {
            "label": {
              "en": "Edison",
              "ar": "يديسون"
            },
            "href": "/locations/united-states/new-jersey/edison"
          },
          {
            "label": {
              "en": "Clifton",
              "ar": "كليفتون"
            },
            "href": "/locations/united-states/new-jersey/clifton"
          }
        ]
      },
      {
        "key": "new-mexico",
        "label": {
          "en": "New Mexico",
          "ar": "نيومكسيكو"
        },
        "href": "/locations/united-states/new-mexico",
        "curriculum": {
          "label": {
            "en": "New Mexico Curriculum",
            "ar": "منهج نيومكسيكو"
          },
          "href": "/locations/united-states/new-mexico/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Albuquerque",
              "ar": "البوكويركوي"
            },
            "href": "/locations/united-states/new-mexico/albuquerque"
          },
          {
            "label": {
              "en": "Santa Fe",
              "ar": "سانتا في"
            },
            "href": "/locations/united-states/new-mexico/santa-fe"
          },
          {
            "label": {
              "en": "Las Cruces",
              "ar": "لاس كروكيس"
            },
            "href": "/locations/united-states/new-mexico/las-cruces"
          }
        ]
      },
      {
        "key": "new-york",
        "label": {
          "en": "New York",
          "ar": "نيويورك"
        },
        "href": "/locations/united-states/new-york",
        "curriculum": {
          "label": {
            "en": "New York Curriculum",
            "ar": "منهج نيويورك"
          },
          "href": "/locations/united-states/new-york/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "New York City",
              "ar": "مدينة نيويورك"
            },
            "href": "/locations/united-states/new-york/new-york-city"
          },
          {
            "label": {
              "en": "Buffalo",
              "ar": "بافالو"
            },
            "href": "/locations/united-states/new-york/buffalo"
          },
          {
            "label": {
              "en": "Rochester",
              "ar": "روتشستر"
            },
            "href": "/locations/united-states/new-york/rochester"
          },
          {
            "label": {
              "en": "Yonkers",
              "ar": "يونكيرس"
            },
            "href": "/locations/united-states/new-york/yonkers"
          },
          {
            "label": {
              "en": "Albany",
              "ar": "ألباني"
            },
            "href": "/locations/united-states/new-york/albany"
          }
        ]
      },
      {
        "key": "north-carolina",
        "label": {
          "en": "North Carolina",
          "ar": "كارولاينا الشمالية"
        },
        "href": "/locations/united-states/north-carolina",
        "curriculum": {
          "label": {
            "en": "North Carolina Curriculum",
            "ar": "منهج كارولاينا الشمالية"
          },
          "href": "/locations/united-states/north-carolina/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Charlotte",
              "ar": "شارلوت"
            },
            "href": "/locations/united-states/north-carolina/charlotte"
          },
          {
            "label": {
              "en": "Raleigh",
              "ar": "رالي"
            },
            "href": "/locations/united-states/north-carolina/raleigh"
          },
          {
            "label": {
              "en": "Greensboro",
              "ar": "غرينسبورو"
            },
            "href": "/locations/united-states/north-carolina/greensboro"
          }
        ]
      },
      {
        "key": "north-dakota",
        "label": {
          "en": "North Dakota",
          "ar": "داكوتا الشمالية"
        },
        "href": "/locations/united-states/north-dakota",
        "curriculum": {
          "label": {
            "en": "North Dakota Curriculum",
            "ar": "منهج داكوتا الشمالية"
          },
          "href": "/locations/united-states/north-dakota/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Fargo",
              "ar": "فارغو"
            },
            "href": "/locations/united-states/north-dakota/fargo"
          },
          {
            "label": {
              "en": "Bismarck",
              "ar": "بيسمارك"
            },
            "href": "/locations/united-states/north-dakota/bismarck"
          },
          {
            "label": {
              "en": "Grand Forks",
              "ar": "غراند فوركس"
            },
            "href": "/locations/united-states/north-dakota/grand-forks"
          }
        ]
      },
      {
        "key": "ohio",
        "label": {
          "en": "Ohio",
          "ar": "أوهايو"
        },
        "href": "/locations/united-states/ohio",
        "curriculum": {
          "label": {
            "en": "Ohio Curriculum",
            "ar": "منهج أوهايو"
          },
          "href": "/locations/united-states/ohio/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Columbus",
              "ar": "كولومبوس"
            },
            "href": "/locations/united-states/ohio/columbus"
          },
          {
            "label": {
              "en": "Cleveland",
              "ar": "كليفلاند"
            },
            "href": "/locations/united-states/ohio/cleveland"
          },
          {
            "label": {
              "en": "Toledo",
              "ar": "توليدو"
            },
            "href": "/locations/united-states/ohio/toledo"
          },
          {
            "label": {
              "en": "Cincinnati",
              "ar": "سينسيناتي"
            },
            "href": "/locations/united-states/ohio/cincinnati"
          }
        ]
      },
      {
        "key": "oklahoma",
        "label": {
          "en": "Oklahoma",
          "ar": "أوكلاهوما"
        },
        "href": "/locations/united-states/oklahoma",
        "curriculum": {
          "label": {
            "en": "Oklahoma Curriculum",
            "ar": "منهج أوكلاهوما"
          },
          "href": "/locations/united-states/oklahoma/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Oklahoma City",
              "ar": "أوكلاهوما سيتي"
            },
            "href": "/locations/united-states/oklahoma/oklahoma-city"
          },
          {
            "label": {
              "en": "Tulsa",
              "ar": "تولسا"
            },
            "href": "/locations/united-states/oklahoma/tulsa"
          },
          {
            "label": {
              "en": "Norman",
              "ar": "نورمان"
            },
            "href": "/locations/united-states/oklahoma/norman"
          }
        ]
      },
      {
        "key": "oregon",
        "label": {
          "en": "Oregon",
          "ar": "أوريغون"
        },
        "href": "/locations/united-states/oregon",
        "curriculum": {
          "label": {
            "en": "Oregon Curriculum",
            "ar": "منهج أوريغون"
          },
          "href": "/locations/united-states/oregon/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Portland",
              "ar": "بورتلاند"
            },
            "href": "/locations/united-states/oregon/portland"
          },
          {
            "label": {
              "en": "Salem",
              "ar": "ساليم"
            },
            "href": "/locations/united-states/oregon/salem"
          },
          {
            "label": {
              "en": "Eugene",
              "ar": "يوغيني"
            },
            "href": "/locations/united-states/oregon/eugene"
          }
        ]
      },
      {
        "key": "pennsylvania",
        "label": {
          "en": "Pennsylvania",
          "ar": "بنسلفانيا"
        },
        "href": "/locations/united-states/pennsylvania",
        "curriculum": {
          "label": {
            "en": "Pennsylvania Curriculum",
            "ar": "منهج بنسلفانيا"
          },
          "href": "/locations/united-states/pennsylvania/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Philadelphia",
              "ar": "فيلادلفيا"
            },
            "href": "/locations/united-states/pennsylvania/philadelphia"
          },
          {
            "label": {
              "en": "Pittsburgh",
              "ar": "بيتسبرغ"
            },
            "href": "/locations/united-states/pennsylvania/pittsburgh"
          },
          {
            "label": {
              "en": "Allentown",
              "ar": "اللينتوون"
            },
            "href": "/locations/united-states/pennsylvania/allentown"
          }
        ]
      },
      {
        "key": "rhode-island",
        "label": {
          "en": "Rhode Island",
          "ar": "رود آيلاند"
        },
        "href": "/locations/united-states/rhode-island",
        "curriculum": {
          "label": {
            "en": "Rhode Island Curriculum",
            "ar": "منهج رود آيلاند"
          },
          "href": "/locations/united-states/rhode-island/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Providence",
              "ar": "بروفيدينكي"
            },
            "href": "/locations/united-states/rhode-island/providence"
          },
          {
            "label": {
              "en": "Cranston",
              "ar": "كرانستون"
            },
            "href": "/locations/united-states/rhode-island/cranston"
          },
          {
            "label": {
              "en": "Warwick",
              "ar": "وارويك"
            },
            "href": "/locations/united-states/rhode-island/warwick"
          }
        ]
      },
      {
        "key": "south-carolina",
        "label": {
          "en": "South Carolina",
          "ar": "كارولاينا الجنوبية"
        },
        "href": "/locations/united-states/south-carolina",
        "curriculum": {
          "label": {
            "en": "South Carolina Curriculum",
            "ar": "منهج كارولاينا الجنوبية"
          },
          "href": "/locations/united-states/south-carolina/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Charleston",
              "ar": "تشارليستون"
            },
            "href": "/locations/united-states/south-carolina/charleston"
          },
          {
            "label": {
              "en": "Columbia",
              "ar": "كولومبيا"
            },
            "href": "/locations/united-states/south-carolina/columbia"
          },
          {
            "label": {
              "en": "Greenville",
              "ar": "غرينفيللي"
            },
            "href": "/locations/united-states/south-carolina/greenville"
          }
        ]
      },
      {
        "key": "south-dakota",
        "label": {
          "en": "South Dakota",
          "ar": "داكوتا الجنوبية"
        },
        "href": "/locations/united-states/south-dakota",
        "curriculum": {
          "label": {
            "en": "South Dakota Curriculum",
            "ar": "منهج داكوتا الجنوبية"
          },
          "href": "/locations/united-states/south-dakota/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Sioux Falls",
              "ar": "سيوكس فاللس"
            },
            "href": "/locations/united-states/south-dakota/sioux-falls"
          },
          {
            "label": {
              "en": "Rapid City",
              "ar": "رابيد كيتي"
            },
            "href": "/locations/united-states/south-dakota/rapid-city"
          },
          {
            "label": {
              "en": "Aberdeen",
              "ar": "ابيردين"
            },
            "href": "/locations/united-states/south-dakota/aberdeen"
          }
        ]
      },
      {
        "key": "tennessee",
        "label": {
          "en": "Tennessee",
          "ar": "تينيسي"
        },
        "href": "/locations/united-states/tennessee",
        "curriculum": {
          "label": {
            "en": "Tennessee Curriculum",
            "ar": "منهج تينيسي"
          },
          "href": "/locations/united-states/tennessee/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Nashville",
              "ar": "ناشفيل"
            },
            "href": "/locations/united-states/tennessee/nashville"
          },
          {
            "label": {
              "en": "Memphis",
              "ar": "ممفيس"
            },
            "href": "/locations/united-states/tennessee/memphis"
          },
          {
            "label": {
              "en": "Knoxville",
              "ar": "كنوكسفيللي"
            },
            "href": "/locations/united-states/tennessee/knoxville"
          }
        ]
      },
      {
        "key": "texas",
        "label": {
          "en": "Texas",
          "ar": "تكساس"
        },
        "href": "/locations/united-states/texas",
        "curriculum": {
          "label": {
            "en": "Texas Curriculum",
            "ar": "منهج تكساس"
          },
          "href": "/locations/united-states/texas/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Houston",
              "ar": "هيوستن"
            },
            "href": "/locations/united-states/texas/houston"
          },
          {
            "label": {
              "en": "Dallas",
              "ar": "دالاس"
            },
            "href": "/locations/united-states/texas/dallas"
          },
          {
            "label": {
              "en": "Austin",
              "ar": "أوستن"
            },
            "href": "/locations/united-states/texas/austin"
          },
          {
            "label": {
              "en": "San Antonio",
              "ar": "سان أنطونيو"
            },
            "href": "/locations/united-states/texas/san-antonio"
          },
          {
            "label": {
              "en": "Arlington",
              "ar": "أرلينغتون"
            },
            "href": "/locations/united-states/texas/arlington"
          }
        ]
      },
      {
        "key": "utah",
        "label": {
          "en": "Utah",
          "ar": "يوتا"
        },
        "href": "/locations/united-states/utah",
        "curriculum": {
          "label": {
            "en": "Utah Curriculum",
            "ar": "منهج يوتا"
          },
          "href": "/locations/united-states/utah/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Salt Lake City",
              "ar": "سولت ليك سيتي"
            },
            "href": "/locations/united-states/utah/salt-lake-city"
          },
          {
            "label": {
              "en": "West Valley City",
              "ar": "ويست فالليي كيتي"
            },
            "href": "/locations/united-states/utah/west-valley-city"
          },
          {
            "label": {
              "en": "Provo",
              "ar": "بروفو"
            },
            "href": "/locations/united-states/utah/provo"
          }
        ]
      },
      {
        "key": "vermont",
        "label": {
          "en": "Vermont",
          "ar": "فيرمونت"
        },
        "href": "/locations/united-states/vermont",
        "curriculum": {
          "label": {
            "en": "Vermont Curriculum",
            "ar": "منهج فيرمونت"
          },
          "href": "/locations/united-states/vermont/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Burlington",
              "ar": "بورلينغتون"
            },
            "href": "/locations/united-states/vermont/burlington"
          },
          {
            "label": {
              "en": "South Burlington",
              "ar": "سوث بورلينغتون"
            },
            "href": "/locations/united-states/vermont/south-burlington"
          },
          {
            "label": {
              "en": "Rutland",
              "ar": "روتلاند"
            },
            "href": "/locations/united-states/vermont/rutland"
          }
        ]
      },
      {
        "key": "virginia",
        "label": {
          "en": "Virginia",
          "ar": "فيرجينيا"
        },
        "href": "/locations/united-states/virginia",
        "curriculum": {
          "label": {
            "en": "Virginia Curriculum",
            "ar": "منهج فيرجينيا"
          },
          "href": "/locations/united-states/virginia/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Fairfax",
              "ar": "فيرفاكس"
            },
            "href": "/locations/united-states/virginia/fairfax"
          },
          {
            "label": {
              "en": "Alexandria",
              "ar": "الإسكندرية"
            },
            "href": "/locations/united-states/virginia/alexandria"
          },
          {
            "label": {
              "en": "Arlington",
              "ar": "أرلينغتون"
            },
            "href": "/locations/united-states/virginia/arlington"
          },
          {
            "label": {
              "en": "Richmond",
              "ar": "ريتشموند"
            },
            "href": "/locations/united-states/virginia/richmond"
          },
          {
            "label": {
              "en": "Virginia Beach",
              "ar": "فيرغينيا بيتش"
            },
            "href": "/locations/united-states/virginia/virginia-beach"
          }
        ]
      },
      {
        "key": "washington",
        "label": {
          "en": "Washington",
          "ar": "واشنطن"
        },
        "href": "/locations/united-states/washington",
        "curriculum": {
          "label": {
            "en": "Washington Curriculum",
            "ar": "منهج واشنطن"
          },
          "href": "/locations/united-states/washington/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Seattle",
              "ar": "سياتل"
            },
            "href": "/locations/united-states/washington/seattle"
          },
          {
            "label": {
              "en": "Bellevue",
              "ar": "بيلليفوي"
            },
            "href": "/locations/united-states/washington/bellevue"
          },
          {
            "label": {
              "en": "Tacoma",
              "ar": "تاكوما"
            },
            "href": "/locations/united-states/washington/tacoma"
          }
        ]
      },
      {
        "key": "west-virginia",
        "label": {
          "en": "West Virginia",
          "ar": "فيرجينيا الغربية"
        },
        "href": "/locations/united-states/west-virginia",
        "curriculum": {
          "label": {
            "en": "West Virginia Curriculum",
            "ar": "منهج فيرجينيا الغربية"
          },
          "href": "/locations/united-states/west-virginia/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Charleston",
              "ar": "تشارليستون"
            },
            "href": "/locations/united-states/west-virginia/charleston"
          },
          {
            "label": {
              "en": "Morgantown",
              "ar": "مورغانتوون"
            },
            "href": "/locations/united-states/west-virginia/morgantown"
          },
          {
            "label": {
              "en": "Huntington",
              "ar": "هونتينغتون"
            },
            "href": "/locations/united-states/west-virginia/huntington"
          }
        ]
      },
      {
        "key": "wisconsin",
        "label": {
          "en": "Wisconsin",
          "ar": "ويسكونسن"
        },
        "href": "/locations/united-states/wisconsin",
        "curriculum": {
          "label": {
            "en": "Wisconsin Curriculum",
            "ar": "منهج ويسكونسن"
          },
          "href": "/locations/united-states/wisconsin/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Milwaukee",
              "ar": "ميلووكي"
            },
            "href": "/locations/united-states/wisconsin/milwaukee"
          },
          {
            "label": {
              "en": "Madison",
              "ar": "ماديسون"
            },
            "href": "/locations/united-states/wisconsin/madison"
          },
          {
            "label": {
              "en": "Green Bay",
              "ar": "غرين باي"
            },
            "href": "/locations/united-states/wisconsin/green-bay"
          }
        ]
      },
      {
        "key": "wyoming",
        "label": {
          "en": "Wyoming",
          "ar": "وايومنغ"
        },
        "href": "/locations/united-states/wyoming",
        "curriculum": {
          "label": {
            "en": "Wyoming Curriculum",
            "ar": "منهج وايومنغ"
          },
          "href": "/locations/united-states/wyoming/curriculum"
        },
        "cities": [
          {
            "label": {
              "en": "Cheyenne",
              "ar": "تشييينني"
            },
            "href": "/locations/united-states/wyoming/cheyenne"
          },
          {
            "label": {
              "en": "Casper",
              "ar": "كاسبير"
            },
            "href": "/locations/united-states/wyoming/casper"
          },
          {
            "label": {
              "en": "Laramie",
              "ar": "لاراميي"
            },
            "href": "/locations/united-states/wyoming/laramie"
          }
        ]
      }
    ]
  }
];
