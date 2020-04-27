Destination.destroy_all
Follow.destroy_all
Trail.destroy_all
Trip.destroy_all

User.destroy_all

preston = User.create(name: "Preston", email: 'preston@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4E03AQGj390_mohnvw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=NnPkx6DCROUNdXwu3vNFvaAraxd8c0segVRKEBRfsKo")
andrew = User.create(name: "Andrew", email: 'andy@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4E03AQHd8iNexNPkjw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=2Wm-aPW47nQdg6_nbq1F7d2mfUjTeWisIQ5csVD9xSA")
romy = User.create(name: "Romy", email: 'romy@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4E03AQGb9loYKzyHGA/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=Zc-RUIc-j1Vz-NMIYDQ0Sdi4tCmy8sqBlTdPhH8-E_0" )
paula = User.create(name: "Paula", email: 'paula@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4D03AQFcnMPfMW0LGA/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=HpfqT3FBFo3bC5YsfcwEmSsHhLX9aQbPm0t1SiAW5Pc")
dhara = User.create(name: "Dhara", email: 'dhara@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C5603AQGkJg5FvwuoQg/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=6xerpyGVFryTknp60NQUuOUlso2RP6mKeta8Vcw5eIQ")
han = User.create(name: "Han", email: 'han@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C5103AQENf6zj1abfDg/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=X28RGtPfvzqYR7BGmujWt5DKJ5jQdEAC5YtPfCA34AE")
jae = User.create(name: "Jae", email: 'jae@gmail.com', password: "123", profile_picture: "https://photos.google.com/photo/AF1QipMmyDqbXMmzUOGBnnDPsmLJTI-2kq3TWMuSy9tT")
scott = User.create(name: "Scott", email: 'scott@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4E03AQE7AIgU2wygAg/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=7jgDsBsxGzpSRKQQNnQtSlBdTH4kZP4P129NuC6WMS4")
evan = User.create(name: "Evan", email: 'evan@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C5603AQGFXfvVcqLhuA/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=qWNPvSYaH1vf2NHpICbqkehxbwm780kqINbYyql89Qc")
deka = User.create(name: "Deka", email: 'deka@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4E03AQGpl0vGs-drdw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=8lc79anxJlnH5VYi0hBSm83Fwj_qWTQYhH747k7ugLQ")
rose = User.create(name: "Rose", email: 'rose@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C5603AQGByopp-pu4uw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=_7bb4SpWuvipqf_FPdrmwC91U4aQtz5acuKJe9FBbYc")
tun = User.create(name: "Tun", email: 'tun@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4D03AQHdX9tE94Ku_w/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=JMZbfL5yhtq539ImqinUOZVhgJbzex0s2WJJhXfkaPw")
will = User.create(name: "Will", email: 'will@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4D03AQEtfPrcnyfDRA/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=twIgI-mUKxQtK6yuKPRT6oSuhDwbmkYzbTbSrPjnULI")
tez = User.create(name: "Tez", email: 'tez@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C5603AQHbvRh8WxGDgg/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=HXF1wOG20DFJvJAcDt_7oaFluS2d3VCjcSZiQIHXL6o")
hanaa = User.create(name: "Hanaa", email: 'hanaa@gmail.com', password: "123", profile_picture: "https://media.licdn.com/dms/image/C4D03AQFV46_GRMLyQQ/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=NQr_ZsYwuXFZUyaD04-3tKeA_E620hMbjn5FEMQCR6w")

f1 = Follow.create(followed_user: preston, user: andrew)
f2 = Follow.create(followed_user: andrew, user: preston)
f3 = Follow.create(followed_user: rose, user: preston)
f4 = Follow.create(followed_user: paula , user: preston)
f5 = Follow.create(followed_user: deka , user: preston)
f6 = Follow.create(followed_user: will , user: preston)
f7 = Follow.create(followed_user: preston, user: romy)
f8 = Follow.create(followed_user: preston, user: paula)
f9 = Follow.create(followed_user: preston, user: dhara)
f10 = Follow.create(followed_user: preston, user: han)
f11 = Follow.create(followed_user: preston, user: jae)
f12 = Follow.create(followed_user: preston, user: scott)
f13 = Follow.create(followed_user: rose, user: romy)
f14 = Follow.create(followed_user: rose, user: paula)
f15 = Follow.create(followed_user: rose, user: dhara)
f16 = Follow.create(followed_user: rose, user: han)
f17 = Follow.create(followed_user: rose, user: jae)



img1 = "https://cdn-files.apstatic.com/hike/7023297_smallMed_1554844842.jpg"
img2 = "https://cdn-files.apstatic.com/hike/7015863_smallMed_1554826913.jpg"
img3 = "https://cdn-files.apstatic.com/hike/7025994_smallMed_1554913295.jpg"
img4 = "https://cdn-files.apstatic.com/hike/7024143_smallMed_1554846342.jpg"
img5 = "https://cdn-files.apstatic.com/hike/7059495_smallMed_1560691891.jpg"
img6 = "https://cdn-files.apstatic.com/hike/7032144_smallMed_1554932569.jpg"
img7 = "https://cdn-files.apstatic.com/hike/7043231_smallMed_1555107854.jpg"

img_arr = [img1, img2, img3, img4, img5, img6, img7]

trail1 = Trail.create(
    api_index: 7021422,
    name: "East Palisades Route", 
    summary: "A lovely hike including sweeping views of the Chattahoochee and a hidden gem - a bamboo forest!",   
    difficulty: "greenBlue",
    stars: 4.4,
    url: "https://www.hikingproject.com/trail/7021422/east-palisades-route",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7023297_smallMed_1554844842.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7023297_smallMed_1554844842.jpg",
    location: "Vinings, Georgia",
    length: 4.2,
    longitude: -84.442,
    latitude: 33.8784
)

trail2 = Trail.create(
    api_index: 7045614, 
    name: "Beltline Eastside Trail: Piedmont Park to Krog Street Market", 
    summary: "A 5-mile romp through some of Atlanta's best spots for both green spaces and urban culture.",   
    difficulty: "green",
    stars: 4.5,
    url: "https://www.hikingproject.com/trail/7045614/beltline-eastside-trail-piedmont-park-to-krog-street-market",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7047531_smallMed_1555537277.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7047531_medium_1555537277.jpg",
    location: "Druid Hills, Georgia",
    length: 6.2,
    longitude: -84.3685,
    latitude: 33.7819
)

trail3 = Trail.create(
    api_index: 7034642, 
    name: "Sope Creek", 
    summary: "Sope Creek has a few miles of gravel and some good, fun, singletrack in metro Atlanta.",   
    difficulty: "blue",
    stars: 4,
    url: "https://www.hikingproject.com/trail/7034642/sope-creek",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7003862_smallMed_1554235788.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7003862_medium_1554235788.jpg",
    location: "Vinings, Georgia",
    length: 8.8,
    longitude: -84.4455,
    latitude: 33.9042
)

trail4 = Trail.create(
    api_index: 7014350, 
    name: "Charlies Bunion Out and Back", 
    summary: "A trail from Newfound Gap to Charlie's Bunion along the Appalachian Trail (AT).",   
    difficulty: "blue",
    stars: 4.7,
    url: "https://www.hikingproject.com/trail/7014350/charlies-bunion-out-and-back",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7011319_smallMed_1554400402.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7011319_medium_1554400402.jpg",
    location: "Gatlinburg, Tennessee",
    length: 8,
    longitude: -83.425,
    latitude: 35.6109
)

trail5 = Trail.create(
    api_index: 7015700, 
    name: "Mt. Cammerer from Low Gap", 
    summary: "A wooded trail with a 360-degree view payoff on top of the mountain.",   
    difficulty: "blueBlack",
    stars: 4.7,
    url: "https://www.hikingproject.com/trail/7015700/mt-cammerer-from-low-gap",
    imgSmallMed: "https://cdn-files.apstatic.com/hike/7014429_smallMed_1554824285.jpg",
    imgMedium: "https://cdn-files.apstatic.com/hike/7014429_medium_1554824285.jpg",
    location: "Newport, Tennessee",
    length: 10.8,
    longitude: -83.2049,
    latitude: 35.752
)

25.times do
    user_randonm_id = User.all.sample.id
    user_random_name = User.find(user_randonm_id).name
    Trip.create(
      user_id: user_randonm_id,
      title: user_random_name + "'s Hiking Trip",
      description: Faker::Books::Dune.quote,
      location: (Faker::Address.city + ", " + Faker::Address.state),
      stars: rand(1..5),
      image: img_arr.sample
    )
end


100.times do 
    Destination.create(
        trail_name: Trail.all.sample.name,
        trek: Trip.all.sample
    )
end
