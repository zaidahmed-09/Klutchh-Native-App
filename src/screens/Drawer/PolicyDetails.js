import React, { useContext, useEffect, useState } from "react";
import {ScrollView, Text, View, SafeAreaView, Image, } from "react-native";
import styled from "styled-components";

import colors from "../../constants/colors";

import {
	Collapse,
	CollapseHeader,
	CollapseBody,
  } from "accordion-collapse-react-native";
import { icons } from "../../utills/Icons";

const PolicyDetails = () => {

    const [press1, setPress1] = useState("-180deg");
	const [press2, setPress2] = useState("-180deg");
	const [press3, setPress3] = useState("-180deg");
	const [press4, setPress4] = useState("-180deg");
	const [press5, setPress5] = useState("-180deg");
	const [press6, setPress6] = useState("-180deg");
	const [press7, setPress7] = useState("-180deg");

    return (
        <SafeAreaView  style={{flex: 1, backgroundColor: colors.PRIMARY_COLOR}} >
            <ScrollView>
                <View style={{
                    padding:15
                }}>

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
                                fontSize: 17,
                            }}
                            >
                            General
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
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
                            lineHeight: 20
                            }}
                        >
                            To avail certain services on the portal, Users would be required to provide certain information for the registration process namely

                            {'\n'}{'\n'}1. Password

                            {'\n'}2. Username

                            {'\n'}3. Email address

                            {'\n'}{'\n'}In the course of providing you with access to the Services, and to provide you access to the features offered through the Portal and verifying your identity, you may be required to furnish additional information, including your Permanent Account Number. Except for any financial information that you choose to "provide while making payment for any Services on the Portal, Klutchh does not collect any other SPI in the course of providing the Services. Any SPI collected by Klutchh shall not be disclosed to any third party without your express consent, save as otherwise set out in this Privacy Policy or as provided in a separate written agreement between Klutchh and you or as required by law. It is clarified that this condition shall not apply to publicly available information, including SPI, concerning you on the Portal. In the course of providing the Services, Users may invite other existing Users or other users ("Invited Users") to participate in any of the Services by providing the email address or Facebook username of such users. Klutchh may thereafter use this information to contact the Invited User and invite such user to register with Klutchh (if such invited User is not an existing User) and participate in the Game with which such person was invited by the User. The participation of the Invited User in any of the games shall be subject to the terms of this Privacy Policy and the Terms and Conditions for the use of the Portal. The User hereby represents that the Invited Users have consented and agreed to such disclosure to and use of their email address by Klutchh.

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
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Disclosure/Sharing
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
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
                            lineHeight: 20
                            }}
                        >
                            Klutchh may also share information as provided by you and data concerning usage of the Services and participation in the Games with third-party service providers engaged by Klutchh, for data analytics or other similar purposes, for storage, improving the services, and helping Klutchh serve you better. Where we propose to use your personal information (that is, information that may be used to identify the User and that is not otherwise publicly available) for any other uses we will ensure that we notify you first. You will also, be allowed to withhold or withdraw your consent for your use other than as listed above. By using the Portal, you hereby expressly agree and grant consent to the collection, use, and storage of this information by Klutchh. Klutchh reserves the right to share, disclose and transfer information collected hereunder with its affiliates. In the event, Klutchh sells or transfers all or a portion of its business assets, consumer information may be one of the business assets that are shared, disclosed, or transferred as part of the transaction. You hereby expressly grant consent and permission to Klutchh for disclosure and transfer of information to such third parties. Klutchh may share information as provided by you and data concerning usage of the Services and participation in the Game with its commercial partners to facilitate user engagement, for marketing and promotional purposes, and other related purposes. Further, Klutchh reserves the right to disclose personal information as obligated by law, in response to duly authorized legal process, governmental requests, and as necessary to protect the rights and interests of Klutchh.

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
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Return, Refund & Cancellation Policy.
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
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
                            lineHeight: 20
                            }}
                        >
                            a.  In the event, that there is an error in the Services provided by us, we may refund the Entry Fee, provided the reasons are genuine and proved after investigation by Klutchh.
                            {'\n'}b. Please read the rules of each Title and Contest before participating.
                            {'\n'}c. We do not cancel registrations once entered, however, in case of exceptional circumstances wherein the fault may lie with the payment gateway or from Our side, We will cancel your participation on request and refund the Entry Fee to you within 5-7 working days.
                            {'\n'}d. In case we cancel your participation in any Mobile Game or Contest as a result of this, We will return Your Entry Fee to You within 5-7 working days for You to redeem the same by playing other Contests on Klutchh.
                            {'\n'}e. We will try Our best to create the best user experience for You. If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payments made through a payment gateway, payment refunds will be made to the same account.
                            Users must use any money in their Account within 365 days. Klutchh shall have the right to directly forfeit any such unused amount after 365 (three hundred and sixty five) days. The idle Balance amount lying in your account may be withdrawn only in exceptional circumstances, determined on a case to case basis on the sole discretion of Klutchh.
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
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Refer and Earn
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
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
                            lineHeight: 20
                            }}
                        >
                            1. The Refer and Earn Program lets you invite friends to join Klutchh. In the event that you and your referred friend meet the criteria and complete all the steps specified in these terms, you and your friend can earn a Cash Bonus from Klutchh of upto Rs. 10 ("Bonus Amount"), which Bonus Amount will be redeemable to join cash contests and contests through the Klutchh's mobile application for the iOS and/or Android mobile devices ("Klutchh Application"). To participate in the Program, please note our terms and conditions ("Terms") in this respect, as they govern your participation in the Program:
                            {'\n'}2. Eligibility – All users who: (i) have an account registered with Klutchh fantasy gaming platform ("Platform") whose account has been verified by Klutchh; and (ii) are eligible to participate in paid fantasy contests on Klutchh; and (iii) have downloaded and installed the Klutchh Application on their respective mobile devices, will be eligible to participate. Participation by proxy is not permitted.

                            {'\n'}3. Participation is voluntary. A user shall not register or operate more than one user account with Klutchh and shall not participate in the Program with more than one user account with Klutchh.
                            {'\n'}4. By participating in the Refer and Earn program, you agree to and accept these Terms.
                            {'\n'}5. To participate in the Program, you are required to have the Klutchh application downloaded and installed on your mobile device. Through the Application, you will be provided with a unique link or code, which can be shared by you ("Inviter") with friends (each an "Invitee") to invite such friends to create and register an account with Klutchh and download the Klutchh Application. On receiving the link or code from the Inviter, the Invitee may either: (i) Click on the link, consequent to which such Invitee will be directed to a registration page and will be provided with the option to register an account with Klutchh and download and install the Klutchh Application on his/her device; or (ii) download and install the Klutchh Application on his/her device independently, register for a Klutchh account through the Klutchh Application and enter the unique code shared by the Inviter where prompted in the Klutchh Application.
                            {'\n'}6. The Inviter and the Invitee will be eligible to earn the Bonus Amount subject to (amongst other terms specified in these Terms): (i) the Invitee not being an existing user of Klutchh; and (ii) the Inviter and Invitee being eligible to participate in the pay-to-play Klutchh fantasy; and (iii) the Invitee successfully registering for an account with Klutchh through the unique link or by using the unique code shared by the Inviter; and (iv) the Inviter and Invitee agreeing to the license agreement for the Klutchh Application and downloading and installing the Klutchh Application as available for the Inviter's and Invitee's respective mobile devices; and (v) the Inviter and Invitee verifying the Inviter's and the Invitee's respective mobile number as provided at the time of registration within thirty (30) days from the date on which Invitee registers for an account with Klutchh ("Verification Period"). For these Terms, an 'existing user of Klutchh' shall mean a user who presently operates an account with the Platform or operated an account with the Platform at any point in time.
                            {'\n'}7. An Invitee who is an existing user of Klutchh is not permitted to register a new account with the Platform for availing of the Bonus Amount. Klutchh will determine in its sole discretion whether an Invitee is an existing user of Klutchh or not and take appropriate action.
                            {'\n'}8. The verification process may require an Inviter/Invitee to submit personal information about the user (Inviter/Invitee) and documents identifying the Inviter/Invitee. The Inviter agrees to receive communication from Klutchh and to allow Klutchh to communicate with Invitees referred by you about the Inviter's participation in the Program. Any information collected in respect of the Inviter/Invitee as part of the Program or otherwise in the course of such person's use of the Website shall be subject to Klutchh's Privacy Policy.
                            {'\n'}9. The verification of an Inviter/Invitee shall be completed at the time of first withdrawal by the Inviter/Invitee from the Inviter's/Invitee's 'Your Winnings' account or 'Your Deposits' account with the Platform. An Inviter/Invitee may voluntarily seek verification of the Inviter/Invitee by clicking on the 'Verify Now' tab of the Account Balance page of the Inviter/Invitee's account with the Platform. If the Invitee opts to register for a Klutchh account through the Klutchh Application, the Invitee can verify his/her contact information at the time of registration.
                            {'\n'}10. The Invitee will be eligible to earn a Bonus of Rs.10 ("Invitee Bonus") upon a) successful verification of the Invitee's mobile number. b) Provided that the Invitee completes the step mentioned in a) above within the Verification Period, the applicable Invitee Bonus shall be credited to the Invitee's Cash Bonus Account with the Platform, within fifteen (15) days of completion of successful verification of the Invitee's mobile number. If the Invitee fails to verify the Invitee's mobile number within the Verification Period or omits to provide documents requested for such verification, the Invitee shall not receive the applicable Invitee Bonus specified above due to the Invitee for completing the such verification process.
                            {'\n'}11. Inviter Bonus a) For an Inviter to be eligible to earn the Bonus Amount due to him/her ("Inviter Bonus"), the Inviter must also download and install the Klutchh Application on his/her mobile device verify his/her mobile number and email address before the completion of the Verification Period. b) The credit of the Inviter Bonus is contingent on the Invitee's registration on the Platform. , the applicable Inviter Bonus earned by the Inviter shall be credited to the Inviter's Cash Bonus Account within fifteen (15) days of the completion of registration. If the Inviter fails to complete any of the verification steps within the Verification Period or omits to provide documents requested for such verification, the Inviter shall not be eligible to earn the applicable Inviter Bonus.
                            {'\n'}12. The Bonus Amounts credited to the Inviter/Invitee can be used by the Inviter/Invitee to join cash contests and contests offered by Klutchh through the Platform. No part of the Bonus Amount may be used to join private contests or be withdrawn or transferred to any other cash balance account held by the Inviter/Invitee with Klutchh or to any third party account or to any bank/payment instrument account. 
                            {'\n'}13. The deposit of the Bonus Amount shall be at the sole discretion of Klutchh and shall be subject to the Inviter's/Invitee's compliance with these Terms. Klutchh may substitute or change the Bonus Amount offered under the Program at any time without notice. An Inviter/Invitee may not substitute the amount of Bonus Amount or substitute offering for other items or exchange for cash.
                            {'\n'}14. Klutchh reserves the right to:
                            {'\n'}a.  withhold the deposit of the Bonus Amount; and/or
                            {'\n'}b.  forfeit any deposited Bonus Amount to an Inviter/Invitee or any prizes/winnings earned by the participant by using such Bonus Amount; and/or
                            {'\n'}c.  deactivate the accounts of the Inviter/Invitee, in the event that it determines or reasonably believes that such Inviter/Invitee has violated these Terms or the terms and conditions of the Klutchh fantasy games.
                            {'\n'}15. Mere participation in the Program does not entitle the Inviter/Invitee to receive any Bonus Amount.
                            {'\n'}16. Klutchh may, at its sole and absolute discretion, disqualify any Inviter/Invitee if such Inviter/Invitee engages in or it is found that such Inviter/Invitee has engaged in any illegal, unlawful or improper conduct (concerning the Program or otherwise).
                            {'\n'}17. The decision of Klutchh will be final and binding with regard to the Program, and the deposit of the Bonus Amount and no correspondence, objection, complaints, etc. will be entertained in this regard.
                            {'\n'}18. This Program cannot be clubbed with any other contests/promotions/programs that are running simultaneously and organised or conducted by Klutchh.
                            {'\n'}19. Klutchh reserves the right to change/modify/or withdraw the Program and/or change these terms and conditions without any prior notice of the same at its sole discretion.
                            {'\n'}20. The Terms and Conditions, as applicable to the Klutchh's fantasy games and services, will apply to and govern the Program.
                            {'\n'}21. Klutchh does not make any commitment, express or implied, to respond to any feedback, suggestion and, or, queries of the participants (Inviter/Invitee) of the Program.
                            {'\n'}22. Notwithstanding anything contained herein, the aggregate liability of Klutchh to a participating Inviter/Invitee concerning the Program for any reason whatsoever shall not exceed Rs.50.
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
                                fontSize: 17,
                            }}
                            >
                            Security Procedures
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
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
                            lineHeight: 20
                            }}
                        >
                            All information gathered on Klutchh is securely stored within Klutchh- controlled database. The database is stored on servers secured behind a firewall: access to such servers is password-protected and strictly limited based on a need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to usover the internet. Further, any information you include in a posting to the discussion areas will be available to anyone with Internet access. By using the Portal, you understand and agree that your information may be used in or transferred to countries other than India. Klutchh also believes that the internet is an ever-evolving medium. We may periodically review from time to time and change our privacy policy to incorporate such future changes as may be considered appropriate, without any notice to you. Our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be. Any changes to our privacy policy will be posted on this page, so you are always aware of what information we collect, how we use it, how we store it, and under what circumstances we disclose it.

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
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Advertising
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
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
                            lineHeight: 20
                            }}
                        >
                            When Klutchh presents information to its online advertisers - to help them understand our audience and confirm the value of advertising on the Portal - it is usually in the form of aggregated statistics on traffic to various pages within our site. When you register with Klutchh, we contact you from time to time about updating your content to provide features that we believe may benefit you. Several deceptive emails, websites, blogs, etc. claiming to be from or associated with Klutchh may or are circulating on the Internet. These emails, websites, blogs, etc. often include our logo, photos, links, content, or other information. Some emails, websites, blogs, etc. call the user to provide login name, password, etc., or that the user has won a prize/ gift or provide a method to commit illegal/ unauthorized acts or deeds or request detailed personal information or a payment of some kind. The sources and contents of these emails, websites, blogs, etc, and accompanying materials are in no way associated with Klutchh. For your protection, we strongly recommend not responding to emails or using websites, blogs, etc. We may use the information provided by you to Klutchh, including your email address or phone number, to contact you about the services availed by you or to inform you of our updated Services if any.

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
                                fontSize: 17,
                            }}
                            >
                            Conditions of Use
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
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
                            lineHeight: 20
                            }}
                        >
                            Klutchh does not warrant that this portal, its servers or email sent by us or on our behalf are virus-free. Klutchh will not be liable for any damages of any kind arising from the use of this portal, including, but not limited to compensatory, direct, indirect, incidental, punitive, special, and consequential damages, loss of data, goodwill, business opportunity, income or profit, loss of or damage to property and claims of third parties. In no event will Klutchh be liable for any damages whatsoever over an amount of 100.

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
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Retention of Data
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
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
                            lineHeight: 20
                            }}
                        >
                            Your personal information may be retained and may continue to be used until (i) the relevant purposes for the use of your information described in this Privacy Policy is no longer applicable; and (ii) we are no longer required by applicable law, regulations, contractual obligations, or legitimate business purposes to retain your personal information and the retention of your personal information is not required for the establishment, exercise or defense of any legal claim.

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
                                fontSize: 17,
                            }}
                            >
                            Updating Information
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
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
                            lineHeight: 20
                            }}
                        >
                            You will promptly notify Klutchh if there are any changes, updates, or modifications to your information. Further, you may also review, update or modify your information and user preferences by logging into your Profile page on the Portal.
                        </Text>
                        </CollapseBody>
                    </Collapse>
                    

                </View>
                {/* <View style={{
                    backgroundColor:"black",
                    padding:15
                }}>
                    <TextWhiteHeading>
                        Privacy Policies
                    </TextWhiteHeading>
                    <TextWhite>
                        To avail certain services on the portal, Users would be required to provide certain information for the registration process namely
                    </TextWhite>

                        <TextWhite>
                        1. Password
                        </TextWhite>
                <TextWhite>
                        2. Username
            </TextWhite>
        <TextWhite>
                        3. Email address
                        </TextWhite>
                        <TextWhite>
                            In the course of providing you with access to the Services, and to provide you access to the features offered through the Portal and verifying your identity, you may be required to furnish additional information, including your Permanent Account Number. Except for any financial information that you choose to "provide while making payment for any Services on the Portal, Klutchh does not collect any other SPI in the course of providing the Services. Any SPI collected by Klutchh shall not be disclosed to any third party without your express consent, save as otherwise set out in this Privacy Policy or as provided in a separate written agreement between Klutchh and you or as required by law. It is clarified that this condition shall not apply to publicly available information, including SPI, concerning you on the Portal. In the course of providing the Services, Users may invite other existing Users or other users ("Invited Users") to participate in any of the Services by providing the email address or Facebook username of such users. Klutchh may thereafter use this information to contact the Invited User and invite such user to register with Klutchh (if such invited User is not an existing User) and participate in the Game with which such person was invited by the User. The participation of the Invited User in any of the games shall be subject to the terms of this Privacy Policy and the Terms and Conditions for the use of the Portal. The User hereby represents that the Invited Users have consented and agreed to such disclosure to and use of their email address by Klutchh.
                        </TextWhite>

                        <TextWhiteHeading>
                            Disclosure/Sharing:
                        </TextWhiteHeading>

                        <TextWhite>
                            Klutchh may also share information as provided by you and data concerning usage of the Services and participation in the Games with third-party service providers engaged by Klutchh, for data analytics or other similar purposes, for storage, improving the services, and helping Klutchh serve you better. Where we propose to use your personal information (that is, information that may be used to identify the User and that is not otherwise publicly available) for any other uses we will ensure that we notify you first. You will also, be allowed to withhold or withdraw your consent for your use other than as listed above. By using the Portal, you hereby expressly agree and grant consent to the collection, use, and storage of this information by Klutchh. Klutchh reserves the right to share, disclose and transfer information collected hereunder with its affiliates. In the event, Klutchh sells or transfers all or a portion of its business assets, consumer information may be one of the business assets that are shared, disclosed, or transferred as part of the transaction. You hereby expressly grant consent and permission to Klutchh for disclosure and transfer of information to such third parties. Klutchh may share information as provided by you and data concerning usage of the Services and participation in the Game with its commercial partners to facilitate user engagement, for marketing and promotional purposes, and other related purposes. Further, Klutchh reserves the right to disclose personal information as obligated by law, in response to duly authorized legal process, governmental requests, and as necessary to protect the rights and interests of Klutchh.
                        </TextWhite>

                        <TextWhiteHeading>
                            Security Procedures:
                        </TextWhiteHeading>

                        <TextWhite>	All information gathered on Klutchh is securely stored within Klutchh- controlled database. The database is stored on servers secured behind a firewall: access to such servers is password-protected and strictly limited based on a need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that

                            information you supply will not be intercepted while being transmitted to us

                            over the internet. Further, any information you include in a posting to the

                            discussion areas will be available to anyone with Internet access. By using the

                            Portal, you understand and agree that your information may be used in or

                            transferred to countries other than India. Klutchh also believes that the internet is an ever-evolving medium. We may periodically review from time to time and change our privacy policy to incorporate such future changes as may be considered appropriate, without any notice to you. Our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be. Any changes to our privacy policy will be posted on this page, so you are always aware of what information we collect, how we use it, how we store it, and under what circumstances we

                            disclose it.</TextWhite>

                    <TextWhiteHeading>
                        Advertising:
                    </TextWhiteHeading>

                        <TextWhite>
                            When Klutchh presents information to its online advertisers - to help them understand our audience and confirm the value of advertising on the Portal - it is usually in the form of aggregated statistics on traffic to various pages within our site. When you register with Klutchh, we contact you from time to time about updating your content to provide features that we believe may benefit you. Several deceptive emails, websites, blogs, etc. claiming to be from or associated with Klutchh may or are circulating on the Internet. These emails, websites, blogs, etc. often include our logo, photos, links, content, or other information. Some emails, websites, blogs, etc. call the user to provide login name, password, etc., or that the user has won a prize/ gift or provide a method to commit illegal/ unauthorized acts or deeds or request detailed personal information or a payment of some kind. The sources and contents of these emails, websites, blogs, etc, and accompanying materials are in no way

                            associated with Klutchh. For your protection, we strongly recommend not responding to emails or using websites, blogs, etc. We may use the information provided by you to Klutchh, including your email address or phone number, to contact you about the services availed by you or to inform you of our updated Services if any.

                            **Conditions of Use:**

                            Klutchh DOES NOT WARRANT THAT THIS PORTAL, IT'S SERVERS OR EMAIL SENT BY US OR ON OUR BEHALF ARE VIRUS-FREE. Klutchh WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS PORTAL, INCLUDING, BUT NOT LIMITED TO COMPENSATORY, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, AND CONSEQUENTIAL DAMAGES, LOSS OF DATA, GOODWILL, BUSINESS OPPORTUNITY, INCOME OR PROFIT, LOSS OF OR DAMAGE TO PROPERTY AND CLAIMS OF THIRD PARTIES. IN NO EVENT WILL Klutchh BE LIABLE FOR ANY DAMAGES WHATSOEVER IN AN AMOUNT overAN AMOUNT OF IN 100.

                            **Retention of Data:**

                            Your personal information may be retained and may continue to be used until (i) the relevant purposes for the use of your information described in this Privacy Policy is no longer applicable; and (ii) we are no longer required by applicable law, regulations, contractual obligations, or legitimate business purposes to retain your personal information and the retention of your personal information is not required for the establishment, exercise or

                            defense of any legal claim.
                        </TextWhite>



                        <TextWhiteHeading>
                            Updating Information:
                        </TextWhiteHeading>

                        <TextWhite>
                            You will promptly notify Klutchh if there are any changes, updates, or modifications to your information. Further, you may also review, update or modify your information and user preferences by logging into your Profile page on the Portal.
                        </TextWhite>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default PolicyDetails