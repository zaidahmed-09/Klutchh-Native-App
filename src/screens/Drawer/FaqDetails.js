import React, { useContext, useEffect, useState} from "react";
import {ScrollView, Text, View, Image, SafeAreaView} from "react-native";

import colors from "../../constants/colors";

import {
	Collapse,
	CollapseHeader,
	CollapseBody,
  } from "accordion-collapse-react-native";
import { icons } from "../../utills/Icons";

const FaqDetails = ({navigation}) => {

    const [press1, setPress1] = useState("-180deg");
    const [press2, setPress2] = useState("-180deg");
    const [press3, setPress3] = useState("-180deg");
    const [press4, setPress4] = useState("-180deg");
    const [press5, setPress5] = useState("-180deg");
    const [press6, setPress6] = useState("-180deg");
    const [press7, setPress7] = useState("-180deg");
    const [press8, setPress8] = useState("-180deg");
    const [press9, setPress9] = useState("-180deg");
    const [press10, setPress10] = useState("-180deg");
    const [press11, setPress11] = useState("-180deg");
    const [press12, setPress12] = useState("-180deg");
    const [press13, setPress13] = useState("-180deg");

    return (
        <SafeAreaView  style={{flex: 1, backgroundColor: colors.PRIMARY_COLOR}} >
        <ScrollView >
            <View
              style={{
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                
              }}
            >
    
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "700",
                  paddingTop: 15,
                  paddingLeft: 3,
                        marginLeft: 10,
                  fontSize: 18
                }}
              >
                GENERAL
              </Text>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress1(press1 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                      Are online cash games legal?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press1 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                    Yes. Both tournaments and fantasy teams are recognized games of
                    skill. Game of skill is completely legal to get into and play
                    for cash in India. Fantasy gaming is banned in the following
                    states namely Assam, Odisha, Andhra Pradesh, Nagaland, and
                    Sikkim in India.
                  </Text>
                </CollapseBody>
              </Collapse>
              
                  <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress2(press2 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                                  width: '86%'
                      }}
                    >
                      How will my personal details like mobile number, PAN card, etc be used?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press2 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                    Your personal details like email will be used to take your feedback to improve Klutchh, send you timely notifications regarding upcoming matches, and also as an account identifier.
                  </Text>
                  <Text
                    style={{
                      color: colors.WHITE,
                      marginTop: 10
                    }}
                  >
                    Use of Pan Card:- PAN card details are required by us as we are handing out and dealing in Cash Prize money so there is a taxation point of view as per the requirements of GOI (Govt. Of India) and also a security factor both for us as well as the user for an easy and safe transaction flow.
                  </Text>
                </CollapseBody>
              </Collapse>
    
    
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "700",
                  paddingTop: 15,
                  paddingLeft: 3,
                  marginLeft: 10,
                  fontSize: 18
                }}
              >
                FANTASY
              </Text>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress3(press3 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                      What is Fantasy Esports on Klutchh?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press3 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                   Fantasy is a game of skill and your Esports knowledge. You chose your dream team. You have to create your team within the given max budget of 15 credits. Your dream team earns points when the real players perform in the real tournaments live. What are you waiting for, come participate and win!
                  </Text>
                </CollapseBody>
              </Collapse>
    
    
    
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "700",
                  paddingTop: 15,
                  paddingLeft: 3,
                        marginLeft: 10,
                  fontSize: 18
                }}
              >
                HOW TO PLAY
    
              </Text>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress4(press4 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                      How to play fantasy on Klutchh?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press4 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                   Here are easy steps to get started: {'\n'} {'\n'}
                   <Text style={{fontSize: 10}} >{'\u2B24'}</Text> Sign-Up: {'\n'}
                    Simple Sign-Up using your Google Account or through an Email-Password.
    
    
            {'\n'}{'\n'}<Text style={{fontSize: 10}} >{'\u2B24'}</Text> View and Enter Tournaments: {'\n'}
                    Pick the match you want to enter and then choose the contest you want to take part in based on the prize pool and entry fees.
    
                    {'\n'}{'\n'}Valorant: {'\n'}
                    Create a fantasy team of your top 5 players and set the 3 multipliers (2x, 1.75x, 1.5x) among them. The total credits are 15.
    
                    {'\n'}{'\n'}PUBGM / FREE FIRE MAX: {'\n'}
                    Create a fantasy team of your top 4 squads. Select your top 3 squads and set the 3 multipliers (2x, 1.75x, 1.5x) among them. The total credits are 15.
    
    
            {'\n'}{'\n'}<Text style={{fontSize: 10}} >{'\u2B24'}</Text>Deposit and Submit: {'\n'}
                    Deposit the minimum amount and confirm your participation.
    
    
            {'\n'}{'\n'}<Text style={{fontSize: 10}} >{'\u2B24'}</Text>Wait for the Win: {'\n'}
                    Wait for the results on the leaderboard and collect your prize!
    
                  </Text>
                </CollapseBody>
              </Collapse>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress5(press5 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                        width: '85%',
                      }}
                    >
                     Which Esports can I build my fantasy team on?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press5 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                  You can create your fantasy team on Valorant, PUBGM, FREEFIRE as of now with many more games like CS: GO, DOTA2, and other popular titles being added soon.
                  </Text>
                </CollapseBody>
              </Collapse>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress6(press6 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                    How to play Battle Royale Fantasy?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press6 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                PUBGM
                {'\n'}Placement Points (PP):- +1
                {'\n'}Kills:- +1
    
                {'\n'}{'\n'}Notes:-
                {'\n'}{'\n'}1. You have 15 credits. Use these credits to select four teams and set the points multipliers (2x, 1.75x, 1.5x) among the top three picks.
                {'\n'}2. Your points are calculated on the basis of the total Kills and Placement Points (PP) your picks have secured.
                
    
    
                {'\n'}{'\n'}Free Fire Max
                {'\n'}{'\n'}Kills:- +1
                {'\n'}Placement Points:- +1
    
                {'\n'}{'\n'}Notes:-
                {'\n'}{'\n'}1. You have 15 credits. Use these credits to select four teams and set the points multipliers (2x, 1.75x, 1.5x) among the top three picks.
                {'\n'}2. The score is calculated on the basis of the total Kills(K) and Placement Points (PP) your picks have secured.
    
    
                  </Text>
                </CollapseBody>
              </Collapse>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress6(press6 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                   How to play Valorant Fantasy?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press6 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
             1. You have 15 credits. Use these credits to select five players and set the points multipliers (2x, 1.75x, 1.5x) among the top three picks.
    {'\n'}{'\n'}2. The score is calculated on the basis of the factors mentioned in the Valorant Fantasy Points System.
    
    
                  </Text>
                </CollapseBody>
              </Collapse>
    
    
    
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "700",
                  paddingTop: 15,
                  paddingLeft: 3,
                marginLeft: 10,
                fontSize: 18
                }}
              >
                SCORING SYSTEM
              </Text>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress7(press7 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                     How is the score calculated?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press7 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                 Our scoring system is easy to calculate yet tricky to predict which enhances the fun of Fantasy Esports
                 {'\n'}{'\n'}<Text style={{fontSize: 10}} >{'\u2B24'}</Text> We are combining the total of Kills and Placement Points(PP) in PUBGM and FREE FIRE MAX.
                 {'\n'}{'\n'}<Text style={{fontSize: 10}} >{'\u2B24'}</Text>We are combining the total of the factors mentioned in the Valorant Fantasy Points System for Valorant.
                 {'\n'}{'\n'}<Text style={{fontSize: 10}} >{'\u2B24'}</Text>Your selected multipliers (2x, 1.75x, 1.5x) will make or break your position. Choose wisely.
                 {'\n'}{'\n'}<Text style={{fontSize: 10}} >{'\u2B24'}</Text>Different contests have a different set of winners. If the points for two or more participants turn out to be the same, the prize money will get split equally. For Example- Two Participants end up with the same fantasy points for the 1st Prize Money let’s say Rs 300, both the equal point holders will get Rs 150 each. But such a case is highly unlikely to be repeated on multiple occasions.</Text>
    
                </CollapseBody>
              </Collapse>
    
    
    
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "700",
                  paddingTop: 15,
                  paddingLeft: 3,
                  marginLeft: 10,
                  fontSize: 18
                }}
              >
                WINNINGS
              </Text>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress8(press8 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                     When will the winnings be distributed?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press8 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                The winner declaration and crediting of the winnings to your Klutchh account usually happens within a couple of hours after the match is completed. Our dedicated team manually verifies the Klutchh Fantasy Scores with our live feed to ensure that the points and scores are correctly updated after every match. This procedure can sometimes take a relatively long time. Only after we are sure that all points and scores are accurate, the final points are updated and winners are declared.
                  </Text>
                </CollapseBody>
              </Collapse>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress9(press9 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                        width: '85%',
                      }}
                    >
                   How will I be informed if I win a Cash prize?
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press9 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
    
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
               Ranks and points will be updated and displayed during and at the end of every match. If you win in any cash contest, the winnings will be credited automatically to your Klutchh account balance and a confirmation from us with the details of your winnings.
    
                 </Text>
                </CollapseBody>
              </Collapse>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress10(press10 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                        width: '80%'
                      }}
                    >
                       Why haven't I received my winnings in my Klutchh account yet?
    
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press10 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
              Usually, the winnings for a match are added to your account balance within hours of the match being completed. However, for matches ending late at night, winners will be declared the next morning after which your winnings will be added to your Klutchh account balance.
    
                 </Text>
                </CollapseBody>
              </Collapse>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress11(press11 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                                  width: '85%'
                      }}
                    >
                       Do I have to pay taxes when I withdraw money to my bank account?
    
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press11 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
             Taxes are deducted at source wherever applicable and paid out by us, as per the Income Tax Act 1961. Thus, if your winnings for a single contest are more than Rs.10,000, a tax of 31.2% will be deducted. The remaining amount (68.80%) will be credited to your winnings balance. E.g. If you win Rs.1,00,000, Rs.31,200 will be deducted and your actual winnings are Rs 68,800. However, you shall be responsible for payment of any other applicable tax, including but not limited to, income tax, gift tax, etc. in respect of the Cash Prizes money won. If you have any queries regarding taxation, we strongly suggest that you consult with a tax expert.
    
                 </Text>
                </CollapseBody>
              </Collapse>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress12(press12 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                        width: '85%'
                      }}
                    >
                       When will my withdrawal be processed?
    
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press12 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
             Withdrawals are processed on the next working day of submitting a withdrawal request and are transferred to your verified bank account within 5 working days. Transfer to Bank Account might take up to 3 business days. Remember, your Klutchh account must be completely verified before you place a withdrawal request.
    
                 </Text>
                </CollapseBody>
              </Collapse>
              
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress13(press13 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                                  width: '85%'
                      }}
                    >
                       How long does it take for a withdrawal to appear in my bank account?
    
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press13 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                    Withdrawal requests are processed to the verified bank account on your Klutchh account and would be credited accordingly. If you haven't received the withdrawal in your bank account within 5 working days, please write to us at klutchhesports@gmail.com
    
                 </Text>
                </CollapseBody>
              </Collapse>
    
    
    
    
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "700",
                  paddingTop: 15,
                  paddingLeft: 3,
                  marginLeft: 10,
                  fontSize: 18
                }}
              >
              PROFILE & PREFERENCES
    
              </Text>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress13(press13 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                  Can I change my PAN Card?
    
    
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press13 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                 Unfortunately, you CANNOT change your PAN Card as it is on your Klutchh account. Also, PAN once verified CANNOT be unlinked from Klutchh’s Account.
                  </Text>
                </CollapseBody>
              </Collapse>
    
    
    
    
              <Text
                style={{
                  color: colors.WHITE,
                  fontWeight: "700",
                  paddingTop: 15,
                  paddingLeft: 3,
                  marginLeft: 10,
                  fontSize: 18
                }}
              >
               WITHDRAWAL PROCEDURE
              </Text>
    
              <Collapse
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: '#211134',
                  borderColor: "#ffffff30",
                }}
                onToggle={() =>
                  setPress13(press13 == "-180deg" ? "-90deg" : "-180deg")
                }
              >
                <CollapseHeader>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: 'center',
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.WHITE,
                        padding: 10,
                        fontWeight: "bold",
                        marginBottom: 3,
                      }}
                    >
                    What is the withdrawal procedure?
    
                    </Text>
                    <Image
                      source={icons.down_arrow}
                      style={{
                        marginRight: 10,
                        marginTop: 4,
                        height: 34,
                        width: 34,
                        transform: [{ rotate: press13 }],
                      }}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody
                  style={{
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      color: colors.WHITE,
                    }}
                  >
                 1. Log in to your Klutchh account.
    
    
                 {'\n'}{'\n'}2. Visit the Profile page and click on Withdraw (if KYC is complete) option under the winnings section. If your account is PAN and bank verified, you will receive an option to
    enter an amount once you click on Withdraw.
    
    
    {'\n'}{'\n'}3. You can enter the amount you would like to withdraw. You will receive a confirmation from Klutchh on your registered email id. You can withdraw money only from the balance of the winnings once your Klutchh account is verified. You cannot withdraw the cash amount but you can use it to join more contests and win more. This verification is a one-time process that doesn't need to be repeated unless you wish to make changes to your account. We need you to provide the following bank account details: Name of the bank, Name of the branch, Name of the account holder, Account no., and IFSC code. Once your account is verified, you can withdraw the desired amount (min. of Rs.100 and max. of Rs.50,000 at a time) and it will be deposited into your bank account within 5 working days. You can request for a maximum of 3 withdrawals per day and not exceeding a total value of Rs. 1,50,000/-
    
                  </Text>
                </CollapseBody>
              </Collapse>
    
    
    
    
            </View>
            <View
              style={{
                marginTop: 40,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image source={require("../../../assets/klutchh.png")} />
            </View>
          </ScrollView> 
        </SafeAreaView>
    )
}

export default FaqDetails
