import React, { useContext, useEffect } from "react";
import {ScrollView, Text, View, SafeAreaView} from "react-native";
import styled from "styled-components";
import colors from "../../constants/colors";


const TextWhite = styled(Text)`
	color: white;
`
const TextWhiteHeading = styled(Text)`
	color: white;
  	font-size: 20px;
  	margin:10px 0px;
  font-weight: 600;
`

const TermsDetails = () => {
    return (
        <SafeAreaView  style={{flex: 1, backgroundColor: colors.PRIMARY_COLOR}} >
            <ScrollView >
                <View style={{
                    padding:15
                }}>
                    <TextWhiteHeading>Klutchh</TextWhiteHeading>
                    <TextWhite style={{lineHeight: 20}} >
                    Klutchh is the flagship brand of ("Klutchh"). Through Klutchh, along with its sub-pages, and the Klutchh App, Klutchh operates five separate portals through which it offers Valorant based online fantasy games and tournaments. Klutchh as used herein shall be construed as a collective reference to Klutchh and the Klutchh App.

                    </TextWhite>



                    <TextWhiteHeading>{'\n'} 1. Usage of Klutchh</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    1.1 Any person ("User") accessing Klutchh or the Klutchh App ('Klutchh platform') for participating in the various contests and games (including fantasy games), available on Klutchh platform ("Contest(s)") ('Klutchh Services') shall be bound by these Terms and Conditions, and all other rules, regulations, and terms of use referred to herein or provided by Klutchh concerning any Klutchh Services.

                    </TextWhite>
                    <TextWhite  style={{lineHeight: 20}}  >
                    {'\n'}  1.2 Klutchh shall be entitled to modify these Terms and Conditions, rules, regulations, and terms of use referred to herein or provided by Klutchh concerning any Klutchh Services, at any time, by posting the same on Klutchh. Use of Klutchh constitutes the User's acceptance of such Terms and Conditions, rules, regulations, and terms of use referred to herein or provided by Klutchh concerning any Klutchh Services, as may be amended from time to time. Klutchh may, at its sole discretion, also notify the User of any change or modification in these Terms and Conditions, rules, regulations, and terms of use referred to herein or provided by Klutchh, by way of sending an email to the User's registered email address or posting notifications in the User accounts. The User may then exercise the options provided in such an email or notification to indicate non-acceptance of the modified Terms and Conditions, rules, regulations, and terms of use referred to herein or provided by Klutchh. If such options are not exercised by the User within the time frame prescribed in the email or notification, the User will be deemed to have accepted the modified Terms and Conditions, rules, regulations, and terms of use referred to herein or provided by Klutchh  Certain Klutchh Services being provided on Klutchh may be subject to additional rules and regulations set down in that respect. To the extent that these Terms and Conditions are inconsistent with the additional conditions set down, the additional conditions shall prevail

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        1.3 Klutchh may, at its sole and absolute discretion:

                        {'\n'}{'\n'}a. Restrict, suspend, or terminate any User's access to all or any part of Klutchh or Klutchh Platform Services;
                        {'\n'}b. Change, suspend, or discontinue all or any part of the Klutchh Platform Services;
                        {'\n'}c. Reject, move, or remove any material that may be submitted by a User;
                        {'\n'}d. Move or remove any content that is available on Klutchh Platform;
                        {'\n'}e. Deactivate or delete a User's account and all related information and files on the account;
                        {'\n'}f. Establish general practices and limits concerning the use of Klutchh Platform;
                        {'\n'}g. Revise or make additions and/or deletions to the roster of players available for selection in a Contest on account of revisions to the roster of players involved in the relevant Sports Event;
                        {'\n'}h.  Assign its rights and liabilities to all User accounts hereunder to any entity (post such assignment intimation of such assignment shall be sent to all Users to their registered email ids)

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        1.4 If Klutchh charges its Users a platform fee in respect of any Klutchh Services, Klutchh shall, without delay, repay such platform fee in the event of suspension or removal of the User's account or Klutchh Services on account of any negligence or deficiency on the part of Klutchh, but not if such suspension or removal is affected due to:  a. Any breach or inadequate performance by the User of any of these Terms and Conditions; or  b. Any circumstances beyond the reasonable control of Klutchh.

                    </TextWhite>


                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        1.5 Users consent to receiving communications such as announcements, administrative messages, and advertisements from Klutchh or any of its partners, licensors, or associates.

                    </TextWhite>


                    <TextWhiteHeading>{'\n'}2. Intellectual Property</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        Klutchh includes a combination of content created by Klutchh, its partners, affiliates, licensors, associates, and/or Users. The intellectual property rights ("Intellectual Property Rights") in all software underlying Klutchh and the Klutchh Platform and material published on Klutchh, including (but not limited to) games, Contests, software, advertisements, written content, photographs, graphics, images, illustrations, marks, logos, audio or video clippings and Flash animation, is owned by Klutchh, its partners, licensors and/or associates. Users may not modify, publish, transmit, participate in the transfer or sale of, reproduce, create derivative works of, distribute, publicly perform, publicly display, or in any way exploit any of the materials or content on Klutchh either in whole or in part without an express written license from Klutchh

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        2.1 Users may request permission to use any Klutchh content by writing into Klutchh email.
                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        2.2 Users are solely responsible for all materials (whether publicly posted or privately transmitted) that they upload, post, e-mail, transmit, or otherwise make available on Klutchh ("Users' Content"). Each User represents and warrants that he/she owns all Intellectual Property Rights in the User's Content and that no part of the User's Content infringes any third party rights. Users further confirm and undertake to not display or use the names, logos, marks, labels, trademarks, copyrights, or intellectual and proprietary rights of any third party on Klutchh. Users agree to indemnify and hold harmless Klutchh, its directors, employees, affiliates and assigns against all costs, damages, loss, and harm including towards litigation costs and counsel fees, in respect of any third party claims that may be initiated including for infringement of Intellectual Property Rights arising out of such display or use of the names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights on Klutchh, by such User or through the User's commissions or omissions

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        2.3 Users hereby grant to Klutchh and its affiliates, partners, licensors, and associates a worldwide, irrevocable, royalty-free, non-exclusive, sub-licensable license to use, reproduce, create derivative works of, distribute, publicly perform, publicly display, transfer, transmit, and/or publish Users' Content for any of the following purposes:  a. displaying Users' Content on Klutchh  b. distributing Users' Content, either electronically or via other media, to other Users seeking to download or otherwise acquire it, and/or  c. storing Users' Content in a remote database accessible by end-users, for a charge.  d. This license shall apply to the distribution and the storage of Users' Content in any form, medium, or technology.
                          e. All names, logos, marks, labels, trademarks, copyrights, or intellectual and proprietary rights on Klutchh(s) belonging to any person (including User), entity, or third party are recognized as proprietary to the respective owners, and any claims, controversy or issues against these names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights must be directly addressed to the respective parties under notice to Klutchh.

                    </TextWhite>

                    
                    <TextWhiteHeading>{'\n'}3. Third-Party Sites, Services, and Products</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    3.1 Klutchh may contain links to other Internet sites owned and operated by third parties. Users' use of each of those sites is subject to the conditions, if any, posted by the sites. Klutchh does not exercise control over any Internet sites apart from Klutchh and cannot be held responsible for any content residing in any third-party Internet site. Klutchh's inclusion of third-party content or links to third-party Internet sites is not an endorsement by Klutchh of such a third-party Internet site.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        3.2 Users' correspondence, transactions/offers, or related activities with third parties, including payment providers and verification service providers, are solely between the User and that third party. Users' correspondence, transactions, and usage of the services/offers of such third party shall be subject to the terms and conditions, policies, and other service terms adopted/implemented by such third party, and the User shall be solely responsible for reviewing the same before transacting or availing of the services/offers of such third party. User agrees that Klutchh will not be responsible or liable for any loss or damage of any sort incurred as a result of any such transactions/offers with third parties. Any questions, complaints, or claims related to any third-party product or service should be directed to the appropriate vendor.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        3.3 Klutchh contains content that is created by Klutchh as well as content provided by third parties.  Klutchh does not guarantee the accuracy, integrity, quality of the content provided by third parties, and such content may not be relied upon by the Users in utilizing the Klutchh Services provided on Klutchh including while participating in any of the contests hosted on Klutchh.
                    </TextWhite>

                    
                    <TextWhiteHeading>{'\n'}4. Privacy Policy</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    All information collected from Users, such as registration and other vital  information, is subject to Klutchh's Privacy Policy which is available at Privacy Policy

                    </TextWhite>



                    <TextWhiteHeading>{'\n'}5. User Conduct</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    5.1 Users agree to abide by these Terms and Conditions and all other rules, regulations, and terms of use of the Website. In the event, User does not abide by these Terms and Conditions and all other rules, regulations, and terms of use, Klutchh may, at its sole and absolute discretion, take necessary remedial action, including but not limited to:

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.2 restricting, suspending, or terminating any User's access to all or any part of Klutchh Services.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.3 Users agree to provide true, accurate, current, and complete information at the time of registration and at all other times (as required by Klutchh). Users further agree to update and keep updated their registration information.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.4 A User shall not register or operate more than one User account with Klutchh.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.5 Users agree to ensure that they can receive all communication from Klutchh by marking emails from Klutchh as part of their "safe senders" list. Klutchh shall not be held liable if any email remains unread by a User as a result of such email getting delivered to the User's junk or spam folder.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.6 Any password issued by Klutchh to a User may not be revealed to anyone else. Users may not use anyone else's password. Users are responsible for maintaining the confidentiality of their accounts and passwords. Users agree to immediately notify Klutchh of any unauthorized use of their passwords or accounts or any other breach of security.
                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.7 Users agree to exit/log out of their accounts at the end of each session. Klutchh shall not be responsible for any loss or damage that may result if the User fails to comply with these requirements.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.8 Users agree not to use cheats, exploits, automation, software, bots, hacks, or any unauthorized third-party software designed to modify or interfere with Klutchh Services and/or Klutchh experience or assist in such activity.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.9 Users agree not to copy, modify, rent, lease, loan, sell, assign, distribute, reverse engineer, grant a security interest in, or otherwise transfer any right to the technology or software underlying Klutchh or Klutchh’s Services.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.10 Users agree that without Klutchh's express written consent, they shall not modify or cause to be modified any files or software that are part of Klutchh's Services.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.11 Users agree not to disrupt, overburden, or aid or assist in the disruption or overburdening of (a) any computer or server used to offer or support Klutchh or the Klutchh’s Services (each a "Server"); or (b) the enjoyment of Klutchh Services by any other User or person.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.12 Users agree not to institute, assist or become involved in any type of attack, including without limitation to distribution of a virus, denial of service, or other attempts to disrupt Klutchh Services or any other person's use or enjoyment of Klutchh Services.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.13 Users shall not attempt to gain unauthorized access to the User accounts, Servers, or networks connected to Klutchh Services by any means other than the User interface provided by Klutchh, including but not limited to, by circumventing or modifying, attempting to circumvent or modify, or encouraging or assisting any other person to circumvent or modify, any security, technology, device, or software that underlies or is part of Klutchh Services.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        5.14 Without limiting the foregoing, Users agree not to use Klutchh for any of the following:
                        {'\n'}a. To engage in any obscene, offensive, indecent, racial, communal, anti-national, objectionable, defamatory, or abusive action or communication;
                        {'\n'}b. To harass, stalk, threaten, or otherwise violate any legal rights of other individuals;
                        {'\n'}c. To publish, post, upload, e-mail, distribute, or disseminate (collectively, "Transmit") any inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful content;
                        {'\n'}d. To Transmit files that contain viruses, corrupted files, or any other similar software or programs that may damage or adversely affect the operation of another person's computer, Klutchh, any software, hardware, or telecommunications equipment;
                        {'\n'}e. To advertise, offer or sell any goods or services for any commercial purpose on Klutchh without the express written consent of Klutchh;
                        {'\n'}f. To download any file, recompile or disassemble or otherwise affect our products that you know or reasonably should know cannot be legally obtained in such manner;
                        {'\n'}g. To falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or the source of software or other material;
                        {'\n'}h. To restrict or inhibit any other user from using and enjoying any public area within our sites;
                        {'\n'}i. To collect or store personal information about other Users;
                        {'\n'}j. To interfere with or disrupt Klutchh, servers, or networks;
                        {'\n'}k. To impersonate any person or entity, including, but not limited to, a representative of Klutchh, or falsely state or otherwise misrepresent User's affiliation with a person or entity;
                        {'\n'}l. To forge headers or manipulate identifiers or other data to disguise the origin of any content transmitted through Klutchh or to manipulate User's presence on Klutchh(s);

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        To take any action that imposes an unreasonably or disproportionately large load on our infrastructure; To engage in any illegal activities. If a User chooses a username that, in Klutchh's considered opinion is obscene, indecent, abusive or that might subject Klutchh to public disparagement or scorn, or a name which is an official team/league/franchise name and/or name of any sporting personality, as the case may be, Klutchh reserves the right, without prior notice to the User, to restrict usage of such names, which in Klutchh’s opinion fall within any of the said categories and/or change such username and intimate the User or delete such username and posts from Klutchh, deny such User access to Klutchh, or any combination of these options.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        Unauthorized access to Klutchh is a breach of these Terms and Conditions, and a violation of the law. Users agree not to access Klutchh by any means other than through the interface that is provided by Klutchh for use in accessing Klutchh. Users agree not to use any automated means, including, without limitation, agents, robots, scripts, or spiders, to access, monitor, or copy any part of our sites, except those automated means that we have approved in advance and writing.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        The use of Klutchh is subject to existing laws and legal processes. Nothing contained in these Terms and Conditions shall limit Klutchh's right to comply with governmental, court, and law-enforcement requests or requirements relating to Users' use of Klutchh.

                    </TextWhite>





                    <TextWhiteHeading>{'\n'}6. Users may reach out to Klutchh through -</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        a. Email if the user has any concerns about a match and/or contest within Forty-Eight (48) hours of winner declaration for the concerned contest.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        b. Persons below the age of eighteen (18) years are not allowed to participate in any of the contests, games (by whatever name called) on the Klutchh Platform. The Users will have to disclose their real age at the time of getting access to the Klutchh Platform.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        c. Klutchh may not be held responsible for any content contributed by Users on the Klutch
                    </TextWhite>

                    <TextWhiteHeading>{'\n'}7. Conditions of Participation:</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    7.1 By entering a Contest, the user agrees to be bound by these Terms and the decisions of Klutchh. Subject to the terms and conditions stipulated hereinbelow, the Company, at its sole discretion, may disqualify any user from a Contest, refuse to award benefits or prizes, and require the return of any prizes, if the user engages in unfair conduct, which the Company deems to be improper, unfair or otherwise adverse to the operation of the Contest or is in any way detrimental to other Users which includes, but is not limited to:

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.2 Falsifying one's personal information (including, but not limited to, name, email address, bank account details, and/or any other information or documentation as may be requested by Klutchh to enter a contest and/or claim a prize/winning.;

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.3 Engaging in any type of financial fraud or misrepresentation including unauthorized use of credit/debit instruments, payment wallet accounts, etc. to enter a Contest or claim a prize. It is expressly clarified that the onus to prove otherwise shall solely lie on the user.;

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.4 Colluding with any other user(s) or engaging in any type of syndicate play;

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.5 Any violation of Contest rules or the Terms of Use;

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.6 Accumulating points or prizes through unauthorized methods such as automated bots, or other automated means;

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.7 Using automated means (including but not limited to harvesting bots, robots, parser, spiders, or screen scrapers) to obtain, collect or access any information on the Website or of any user for any purpose
                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.8 Tampering with the administration of a Contest or trying to in any way tamper with the computer programs or any security measure associated with a Contest;
                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.9 Obtaining other users’ information without their express consent and/or knowledge and/or spamming other users (Spamming may include but shall not be limited to sending unsolicited emails to users, sending bulk emails to Klutchh Users, sending unwarranted email content either to selected Users or in bulk); or

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.10 Abusing the Website in any way (‘unparliamentary language, slangs or disrespectful words’ are some of the examples of Abuse)

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.11 It is clarified that in case a User is found to violate this policy, Klutchh reserves its right to initiate appropriate Civil/Criminal remedies as it may be advised other than forfeiture and/or recovery of prize money if any.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.12 In the event a Participant indicates, while entering an address, that he/she is a resident of either Assam, Odisha, Sikkim, Nagaland, or Andhra Pradesh, such Participant will not be permitted to proceed to sign up for any match in the paid version of the Contest as described below.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        7.13 Once the Participants have entered the above information and clicked on the "register" tab, and such Participants are above the age of 18 years, they are sent an email confirming their registration and containing their login information.

                    </TextWhite>



                    <TextWhiteHeading>{'\n'}8. Contest(s), Participation, and Prizes</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    As part of its services, Klutchh may make available the contest(s) on the Klutchh platform.
                    Currently, the following contests are made available on the Klutchh platform:
                    {'\n'}1) A fantasy Valorant game and {'\n'}2) Tournaments and matches on Valorant; Individual users wishing to participate in such contest ("Participants”) are invited to create their fantasy teams ("Team/s”) consisting of real-life Valorant players involved in the real-life Valorant match, series or tournament (each a "Sport Event") to which the fantasy game relates. Klutchh offers its platform to Participants for fantasy game Contest(s) being created relating to each eSport Event, and participants can participate in such Contest(s) with their Teams.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        8.1 Depending upon the circumstances of each match, the participants can edit their teams till the official match start time as declared by the officials of the Sports Event or adjusted deadline, as specified below.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        a. Klutchh reserves the right to abandon a specific round or adjust the deadline of a round in certain specific, uncertain scenarios, which are beyond Klutchh’s reasonable control, including but not limited to the ones mentioned herein below:
                        {'\n'}a.1. The actual match start time is before the official deadline:
                        Klutchh reserves the right to adjust the deadline to a maximum of 10 minutes post the actual match start time. In case the actual match start time is more than 10 minutes of the official deadline, the contest will be abandoned.
                        {'\n'}a.2. The actual match start time is after the official deadline:
                        Klutchh reserves the right to extend the deadline or abandon the contest/game based on the circumstances such as non-appearance of teams, technical/equipment glitches causing delays, etc.
                        {'\n'}a.3. Klutchh shall endeavor to send communications through emails, about any such change as is contemplated in the aforementioned paragraphs to keep the User updated.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        8.2 Teams are awarded points based on the real-life players’ performances at the end of a designated match, match, or tournament of the Contest(s). The Participant(s) whose Team(s) have achieved the highest aggregate score(s) in the Contest(s) shall be declared winners ("Winners"). In certain pre-specified Contests, there may be more than one Winner and distribution of prizes to such Winners will be in increasing order of their Team's aggregate score at the end of the designated match(s) of the Contests.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        8.3 The Contest(s) across the Klutchh Services shall, in addition to the Terms and Conditions, rules, and regulations mentioned herein, be governed by:

                    </TextWhite>





                    <TextWhiteHeading>{'\n'}9. "Fantasy Rules"</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        9.1 Other rules and regulations (including rules and regulations concerning any payments made to participate in the Contest(s); and all Participants agree to abide by the same.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        9.2 Currently, there are paid versions of the Contest(s) made available on Klutchh platform. Users may participate in the Contest(s) by paying the pre-designated amount as provided on the relevant Contest page. The ‘pre-designated amount’ means and includes a pre-determined platform fee for accessing Klutchh services and pre-determined participant’s contribution towards prize money pool. The Participant with the highest aggregate points at the end of the predetermined match shall be eligible to win a pre-designated prize which is disbursed out of prize money pool, as stated on the relevant Contest(s) page.9.2 

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        9.3 A Participant may create different Teams for participation in Contest(s) concerning a Sport Event across the Klutchh Services. However, unless Klutchh specifies otherwise in relation to any Contest ("Multiple Entry Contest"), Participants acknowledge and agree that they may enter only one Team in any Contest offered in relation to a Sports Event. Participants shall pay a pre-designated amount for participating in the contest(s) being created on the Klutchh platform.
                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        9.4 In the event a Participant indicates, while entering an address, that he/she is a resident of either Assam, Odisha, Sikkim, Nagaland, Andhra Pradesh, , such Participant will not be permitted to proceed to sign up for the match or contest and may not participate in any paid version of the Contest(s).

                    </TextWhite>

                    <TextWhiteHeading>{'\n'}10. The legality of Game of Skill</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    10.1 Games of skill are legal, as they are excluded from the ambit of Indian gambling legislations including, the Public Gambling Act of 1867. The Indian Supreme Court in the cases of State of Andhra Pradesh v. K Satyanarayana (AIR 1968 SC 825) and KR Lakshmanan v. State of Tamil Nadu (AIR 1996 SC 1153) has held that a game in which success depends predominantly upon the superior knowledge, training, attention, experience, and adroitness of the player shall be classified as a game of skill.
                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        10.2 The Contest (s) described above (across the Klutchh Services) are games of skill as the success of Participants depends primarily on their superior knowledge of the game of Valorant, knowledge of players' relative form, players' performance in a particular format, conditions, attention, and dedication towards the Contest(s) and adroitness in playing the Contest(s). The Contest(s) also requires Participants to field well-balanced sides with limited resources and make substitutions at appropriate times to gain the maximum points.

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}
                        10.3 By participating in this Contest(s), each Participant acknowledges and agrees that he/she is participating in a game of skill.

                    </TextWhite>





                    <TextWhiteHeading>{'\n'}11. Eligibility</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        a. The Contest(s) are open only to persons above the age of 18 years.

                        {'\n'}b. The Contest(s) are open only to persons, currently residing in India.

                        {'\n'}c. Klutchh may, in accordance with the laws prevailing in certain Indian states, bar individuals residing in those states from participating in the Contest(s). Currently, individuals residing in the Indian states of Assam, Odisha, Sikkim, Nagaland, or Andhra Pradesh may not participate in the paid version of the Contest as the laws of these states bar persons from participating in games of skill where participants are required to pay to enter.

                        {'\n'}d. Persons who wish to participate must have a valid email address.

                        {'\n'}e. Klutchh may on receipt of information bar a person from participation and/or withdraw winning amounts if such person is found to be one with insider knowledge of participating teams in any given contests/match, organizing boards, leagues, etc.

                        {'\n'}f. Only those Participants who have successfully registered on the Klutchh as well as registered prior to each match in accordance with the procedure outlined above shall be eligible to participate in the Contest and win prizes.

                    </TextWhite>

                    

                    <TextWhiteHeading>{'\n'}12. Payment Terms</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    In respect of any transactions entered into on the Klutchh platform, including making a payment to participate in the paid versions of Contest(s), Users agree to be bound by the following payment terms:

                    </TextWhite>

                    <TextWhite  style={{lineHeight: 20}}  >
                        {'\n'}12.1 The payment of the pre-designated amount Users make to participate in the Contest(s) is inclusive of the pre-designated platform fee for access to the Klutchh Services charged by Klutchh and the pre-determined participant’s contribution towards prize money pool.

                        {'\n'}{'\n'}12.2 Subject to these Terms and Conditions, all amounts collected from the User are held in a separate non-interest earning bank Accounts. The said accounts are operated by a third party appointed by Klutchh in accordance with Clause 10 of these Terms and Conditions. From these bank accounts, the payouts can be made to (a) Users (towards their withdrawals), (b) Klutchh (towards its Platform Fees), and to (c) Government (towards TDS on Winnings Amount). Klutchh receives only its share of the platform Fees through the said Escrow Agent.

                        {'\n'}{'\n'}12.3 Klutchh reserves the right to charge a Platform Fee, which would be specified and notified by Klutchh on the Contest page, being created on Klutchh platform, prior to a User's joining of such Contest. The Platform Fee (inclusive of applicable tax thereon) will be debited from the User’s account balance The User may participate in a Contest wherein the User has to contribute a pre-specified contribution towards the Contest, which will be passed on to the Winner(s) of the Contest after the completion of the Contest as per the terms and conditions of such Contest. It is clarified that Klutchh has no right or interest in this Prize Money Pool, and only acts as an intermediary engaged in collecting and distributing the Prize Money Pool in accordance with the Contest terms and conditions. The amount to be paid-in by the User towards the Prize Money Pool would also be debited from the User’s account balance maintained with the Trustee.

                        {'\n'}{'\n'}12.4 Failure to provide Klutchh with a valid bank account or valid identification documents (to Klutchh's satisfaction) may result in the forfeiture of any amounts subject to transfer in accordance with this clause.

                        {'\n'}{'\n'}12.5 Users agree that once they confirm a transaction on Klutchh, they shall be bound by and make payment for that transaction.

                        {'\n'}{'\n'}12.6 The User acknowledges that subject to the time taken for bank reconciliations and other external dependencies that Klutchh has on third parties, any transactions on Klutchh Platform may take up to 24 hours to be processed. Any amount paid or transferred into the User's 'Unutilized' Account or Winnings Account may take up to 24 hours to reflect in the User's 'Unutilized' Account or Winnings Account balance. Similarly, the utilization of the Cash Bonus or money debited from the 'Unutilized' Account or Winnings Account may take up to 24 hours to reflect in the User's 'Unutilized' Account or Winnings Account balance. Users agree not to raise any complaint or claim against Klutchh in respect of any delay, including any lost opportunity to join any Contest or match due to delay in crediting of transaction amount into any of the User's accounts

                        {'\n'}{'\n'}12.7 A transaction, once confirmed, is final and no cancellation is permissible.

                        {'\n'}{'\n'}12.8 Klutchh may, in certain exceptional circumstances and at its sole and absolute discretion, refund the amount to the User after deducting applicable cancellation charges and taxes. At the time of the transaction, Users may also be required to take note of certain additional terms and conditions and such additional terms and conditions shall also govern the transaction. To the extent that the additional terms and conditions contain any clause that is conflicting with the present terms and conditions, the additional terms and conditions shall prevail.

                    </TextWhite>




                    <TextWhiteHeading>{'\n'}13. Tabulation of fantasy points</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        Klutchh may obtain the score feed and other information required for the computation and tabulation of fantasy points from the third-party service provider(s) and/or the official website of the match organizer. In the rare event that any error in the computation or tabulation of fantasy points, selection of winners, abandonment of a match, etc., as a result of inaccuracies in or incompleteness of the feed provided by the third-party service provider and/or the official website of the match organizer comes to its attention, Klutchh shall use best efforts to rectify such error prior to the distribution of prizes. However, Klutchh hereby clarifies that it relies on the accuracy and completeness of such third party score/statistic feeds and does not itself warrant or make any representations concerning the accuracy thereof and, in any event, shall take no responsibility for inaccuracies in computation and tabulation of fantasy points or the selection of winners as a result of any inaccurate or incomplete scores/statistics received from such third party service provider. Users and Participants agree not to make any claim or raise any complaint against Klutchh in this respect.

                    </TextWhite>



                    <TextWhiteHeading>{'\n'}14. Selection and Verification of Winners and Conditions relating to the Prizes</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        a. Selection of Winners
                        {'\n'}Winners will be decided on the basis of the scores of the Teams in a designated match (which may last anywhere between one day and an entire tournament) of the Contest(s). The Participant(s) owning the Team(s) with the highest aggregate score in a particular match shall be declared the winner(s). In certain pre-specified Contests. Participants creating Teams on behalf of any other Participant or person shall be disqualified. In the event of a tie, the winning Participants shall be declared Winners and the prize shall be equally divided among such Participants. Klutchh shall not be liable to pay any prize if it is discovered that the Winner(s) have not abided by these Terms and Conditions, and other rules and regulations in relation to the use of the Klutchh, Contest, "Fantasy Rules", etc.



                        {'\n'}{'\n'}b. Contacting Winners
                        {'\n'}Winners shall be contacted by Klutchh or the third party conducting the Contest on the email address provided at the time of registration. The verification process and the documents required for the collection of prizes shall be detailed to the Winners at this stage. As a general practice, winners will be required to provide the following documents:



                        {'\n'}{'\n'}c. User's PAN card
                        {'\n'}User's bank account details and proof of the same.Klutchh shall not permit a Winner to withdraw his/her prize(s)/accumulated winnings unless the above-mentioned documents have been received and verified within the time period stipulated by Klutchh. The User represents and warrants that the documents provided in the course of the verification process are true copies of the original documents to which they relate.Participants are required to provide proper and complete details at the time of registration. Klutchh shall not be responsible for communications errors, commissions, or omissions including those of the Participants due to which the results may not be communicated to the Winner.



                        {'\n'}{'\n'}d. The list of Winners shall be posted on a separate web page on the Klutchh.
                        {'\n'}In the event that a Participant has been declared a Winner on the above mentioned web page but has not received any communication from Klutchh, such Participant may contact Klutchh within the time specified on the webpage.

                    </TextWhite>




                    <TextWhiteHeading>{'\n'}15. Verification process</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                    Only those Winners who successfully complete the verification process and provide the required documents within the time limit specified by Klutchh shall be permitted to withdraw/receive their accumulated winnings (or any part thereof). Klutchh shall not entertain any claims or requests for an extension of time for the submission of documents.

                    {'\n'}Klutchh shall scrutinize all documents submitted and may, at its sole and absolute discretion, disqualify any Winner from withdrawing his accumulated winnings (or any part thereof) on the following matches:

                    {'\n'}Determination by Klutchh that any document or information submitted by the Participant is incorrect, misleading, false, fabricated, incomplete, or illegible; or

                    {'\n'}Participant does not fulfill the Eligibility Criteria specified in Clause 10 above; or Any other match.
                    </TextWhite>



                    <TextWhiteHeading>{'\n'}16. Taxes Payable</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        All prizes shall be subject to deduction of tax ("TDS") as per the Income Tax Act 1961. As of April 1, 2018, the TDS rate prescribed by the Government of India with respect to any prize money amount that is in excess of Rs. 10,000/- is 31.2% of the total prize money amount. In case of any revisions by the Government of India to the aforementioned rate in the future, TDS will be deducted by Klutchh in accordance with the then-current prescribed TDS rate. Winners will be provided TDS certificates in respect of such tax deductions. The Winners shall be responsible for payment of any other applicable tax, including but not limited to, income tax, gift tax, etc. in respect of the prize money.
                    </TextWhite>



                    <TextWhiteHeading>{'\n'}17. Miscellaneous</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        17.1 The decision of Klutchh with respect to the awarding of prizes shall be final, binding, and non-contestable.

                        {'\n'}17.2 Participants playing the paid formats of the Contest(s) confirm that they are not residents of any of the following Indian states - Assam, Odisha, Sikkim, Nagaland, Andhra Pradesh, or Telangana. If it is found that a Participant playing the paid formats of the Contest(s) is a resident of any of the abovementioned states, Klutchh shall disqualify such Participant and forfeit any prize won by such Participant. Further Klutchh may, at its sole and absolute discretion, suspend or terminate such Participant's account with Klutchh. Any amount remaining unused in the User's Game Account or Winnings Account on the date of deactivation or deletion shall be reimbursed to the User by an online transfer to the User's bank account on record with Klutchh, subject to the processing fee (if any) applicable on such transfers as set out herein.

                        {'\n'}17.3 If it is found that a Participant playing the paid formats of the Contest(s) is under the age of eighteen (18), Klutchh shall be entitled, at its sole and absolute discretion, to disqualify such Participant and forfeit his/her prize. Further, Klutchh may, at its sole and absolute discretion, suspend or terminate such Participant's account.

                        {'\n'}17.4 To the extent permitted by law, Klutchh makes no representations or warranties as to the quality, suitability, or merchantability of any prizes and shall not be liable in respect of the same.

                        {'\n'}17.5 Klutchh may, at its sole and absolute discretion, vary or modify the prizes being offered to winners. Participants shall not raise any claim against Klutchh or question its right to modify such prizes being offered, prior to closure of the Contest.

                        {'\n'}17.6 The Winners shall bear all transaction charges levied for delivery of cash prizes.

                        {'\n'}17.7 All prizes are non-transferable and non-refundable. Prizes cannot be exchanged/redeemed for cash or kind. No cash claims can be made in lieu of prizes in kind.

                    </TextWhite>



                    <TextWhiteHeading>{'\n'}18. Publicity</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        18.1 Acceptance of a prize by the Winner constitutes permission for Klutchh, and its affiliates to use the Winner's name, likeness, voice, and comments for advertising and promotional purposes in any media worldwide for purposes of advertising and trade without any further permissions or consents and/or additional compensation whatsoever.

                        {'\n'}18.2 The Winners further undertake that they will be available for promotional purposes as planned and desired by Klutchh without any charge. The exact dates remain the sole discretion of Klutchh. Promotional activities may include but not be limited to press events, internal meetings, and ceremonies/functions.

                    </TextWhite>

                
                    <TextWhiteHeading>{'\n'}19. General Conditions</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        19.1 If it comes to the notice of Klutchh that any governmental, statutory, or regulatory compliances or approvals are required for conducting any Contest(s) or if it comes to the notice of Klutchh that conduct of any such Contest(s) is prohibited, then Klutchh shall withdraw and/or cancel such Contest(s) without prior notice to any Participants or winners of any Contest(s). Users agree not to make any claim in respect of such cancellation or withdrawal of the Contest or Contest it in any manner.

                        {'\n'}19.2 Nothing contained in these Terms and Conditions shall prevent Klutchh from seeking and obtaining interim or permanent equitable or injunctive relief, or any other relief available to safeguard Klutchh's interest prior to, during, or following the filing of arbitration proceedings or pending the execution of a decision or award in connection with any arbitration proceedings from any court having jurisdiction to grant the same. The pursuit of equitable or injunctive relief shall not constitute a waiver on the part of Klutchh to pursue any remedy for monetary damages through the arbitration described herein.

                    </TextWhite>



                    <TextWhiteHeading>{'\n'}20. Release and Limitations of Liability</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        20.1 Users shall access the Klutchh Services provided on Klutchh voluntarily and at their own risk. Klutchh shall, under no circumstances be held responsible or liable on account of any loss or damage sustained (including but not limited to any accident, injury, death, loss of property) by Users or any other person or entity during the course of access to the Klutchh Services (including participation in the Contest(s)) or as a result of acceptance of any prize.

                        {'\n'}20.2 By entering the contests and accessing the Klutchh Services provided therein, Users hereby release the form and agree to indemnify Klutchh, and/ or any of its directors, employees, partners, associates, and licensors, from and against all liability, cost, loss, or expense arising out their access to the Klutchh Services including (but not limited to) personal injury and damage to property and whether direct, indirect, consequential, foreseeable, due to some negligent act or omission on their part, or otherwise.

                        {'\n'}20.3 Klutchh accepts no liability, whether jointly or severally, for any errors or omissions, whether on behalf of itself or third parties in relation to the prizes.

                        {'\n'}20.4 Users shall be solely responsible for any consequences which may arise due to their access to Klutchh Services by conducting an illegal act or due to non-conformity with these Terms and Conditions and other rules and regulations in relation to Klutchh Services, including the provision of incorrect address or other personal details. Users also undertake to indemnify Klutchh and their respective officers, directors, employees, and agents on the happening of such an event (including without limitation cost of an attorney, legal charges, etc.) on a full indemnity basis for any loss/damage suffered by Klutchh on account of such activity on the part of the Users.

                        {'\n'}20.5 Users shall indemnify, defend, and hold Klutchh harmless from any third party/entity/organization claims arising from or related to such User's engagement with the Klutchh or participation in any Contest. In no event shall Klutchh be liable to any User for acts or omissions arising out of or related to User's engagement with the Klutchh or his/her participation in any Contest(s).

                        {'\n'}20.6 In consideration of Klutchh allowing Users to access the Klutchh Services, to the maximum extent permitted by law, the Users waive and release each and every right or claim, all actions, causes of actions (present or future) each of them has or may have against Klutchh, its respective agents, directors, officers, business associates, group companies, sponsors, employees, or representatives for all and any injuries, accidents, or mishaps (whether known or unknown) or (whether anticipated or unanticipated) arising out of the provision of Klutchh Services or related to the Contests or the prizes of the Contests.

                    </TextWhite>




                    <TextWhiteHeading>{'\n'}21. Disclaimers</TextWhiteHeading>
                    <TextWhite  style={{lineHeight: 20}}  >
                        a. To the extent permitted under law, neither Klutchh nor its parent/holding company, subsidiaries, affiliates, directors, officers, professional advisors, employees shall be responsible for the deletion, the failure to store, the misdelivery, or the untimely delivery of any information or material.

                        {'\n'}b. To the extent permitted under law, Klutchh shall not be responsible for any harm resulting from downloading or accessing any information or material, the quality of servers, games, products, Klutchh services or sites, cancellation of the competition, and prizes. Klutchh disclaims any responsibility for, and if a user pays for access to one of Klutchh's Services the User will not be entitled to a refund as a result of, any inaccessibility that is caused by Klutchh's maintenance on the servers or the technology that underlies our sites, failures of Klutchh's service providers (including telecommunications, hosting, and power providers), computer viruses, natural disasters or other destruction or damage of our facilities, acts of nature, war, civil disturbance, or any other cause beyond our reasonable control. In addition, Klutchh does not provide any warranty as to the content on the Klutchh(s). Klutchh(s) content is distributed on an "as is, as available" basis.

                        {'\n'}c. Any material accessed, downloaded, or otherwise obtained through Klutchh is done at the User's discretion, competence, acceptance, and risk, and the User will be solely responsible for any potential damage to the User's computer system or loss of data that results from a User's download of any such material.

                        {'\n'}d. Klutchh shall make best endeavors to ensure that the Klutchh(s) is error-free and secure, however, neither Klutchh nor any of its partners, licensors, or associates makes any warranty that:

                        {'\n'}e. Klutchh will meet Users' requirements,

                        {'\n'}f. Klutchh(s) will be uninterrupted, timely, secure, or error-free

                        {'\n'}g. the results that may be obtained from the use of Klutchh(s) will be accurate or reliable; and
                        the quality of any products, Klutchh Services, information, or other material that Users purchase will meet Users' expectations.

                        {'\n'}h. In case Klutchh discovers any error, including any error in the determination of Winners or in the transfer of amounts to a User's account, Klutchh reserves the right (exercisable at its discretion) to rectify the error in such manner as it deems fit, including through set-off of the erroneous payment from amounts due to the User or deduction from the User's account of the amount of erroneous payment. In case of exercise of remedies in accordance with this clause, Klutchh agrees to notify the User of the error and of the exercise of the remedy(ies) to rectify the same.

                        {'\n'}i. To the extent permitted under law, neither Klutchh nor its partners, licensors, or associates shall be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use our sites, even if we have been advised of the possibility of such damages.

                        {'\n'}j. Any Klutchh Services, events, or Contest(s) being hosted or provided, or intended to be hosted on Klutchh platform and requiring specific permission or authority from any statutory authority or any state or the central government, or the board of directors shall be deemed canceled or terminated if such permission or authority is either not obtained or denied either before or after the availability of the relevant Klutchh Services, events or Contest(s) are hosted or provided.

                    </TextWhite>

                    

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TermsDetails;