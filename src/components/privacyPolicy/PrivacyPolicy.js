import React from 'react'
import { useHistory } from 'react-router-dom'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {

        const history = useHistory()

        const goBack = () => {
                history.goBack()
        }

        return (

                <>

                        <main className="pp--container">
                                
                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>

                                <h1 className="pp--title">PRIVACY NOTICE</h1>

                                <h4 className="pp--date">Last updated April 13, 2022</h4>

                                <section className="pp--section pp--introduction">

                                        <p>This privacy notice for Herald Octavian Whistler (doing business as Mr. Whistler's Musical Emporium)("<span className="bold">Mr. Whistler's Musical Emporium</span>," "<span className="bold">we</span>," or "<span className="bold">our</span>"), describes how and why we might collect, store, use, and/or share ("<span className="bold">process</span>") your information when you use our services ("<span className="bold">Services</span>"), such as when you:</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        Download and use our mobile application(Whistler) or any other application of ours that links to this privacy notice
                                                </li>
                                        
                                                <li>
                                                        Engage with us in other related ways, including any sales, marketing, or events
                                                </li>
                                        </ul>

                                                <p><span className="bold">Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices.If you do not agree with our policies and practices, please do not use our Services.If you still have any questions or concerns, please contact us at herald.whistler@sample.com.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>

                                <section className='pp--section pp--summary'>
                                        <h2 className="pp--section-title">SUMMARY OF KEY POINTS</h2>
                                        <p><span className="italic"><b className="bold">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click <a href="#toc">here</a> to go directly to our table of contents.</b></span></p>

                                        <p><span className="bold">What personal information do you process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Mr. Whistler's Musical Emporium and the Services, the choices you make, and the products and features you use. Click <a href="#personalInfo">here</a> to learn more.</p>

                                        <p><span className="bold">Do you process any sensitive personal information?</span> We do not process sensitive personal information.</p>

                                        <p><span className="bold">Do you receive any information from third parties?</span> We do not receive any information from third parties.</p>

                                        <p><span className="bold">How do you process my information?</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click <a href="#infoUse">here</a> to learn more.</p>

                                        <p><span className="bold">In what situations and with which parties do you share personal information?</span> We may share information in specific situations and with specific third parties. Click <a href="#whoShare">here</a> to learn more.</p>

                                        <p><span className="bold">How do you keep my information safe?</span> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cyber criminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.Click <a href="#infoSafe">here</a> to learn more.</p>

                                        <p><span className="bold">What are my rights?</span> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click <a href="#privacyRights">here</a> to learn more.</p>

                                        <p><span className="bold">How do I exercise my rights?</span> The easiest way to exercise your rights is by filling out our data subject request form available <a href="https://app.termly.io/notify/de782ecd-94df-484d-ba78-4ca48f946718" rel="noopener noreferrer" target="_blank">here</a> or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

                                        <p>Want to learn more about what Mr. Whistler's Musical Emporium does with any information we collect? Click <a href="#toc">here</a> to review the notice in full.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>

                                <section className="pp--section pp--toc" id="toc">
                                        <h2 className="pp--section-title">TABLE OF CONTENTS</h2>
                                        <ol className='pp--ol ol--dec__number'>
                                                <li>
                                                        <a href="#infoCollect">WHAT INFORMATION DO WE COLLECT?</a>
                                                </li>
                                                <li>
                                                        <a href="#infoUse">HOW DO WE PROCESS YOUR INFORMATION?</a>
                                                </li>
                                                <li>
                                                        <a href="#legalBases">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a>
                                                </li>
                                                <li>
                                                        <a href="#whoShare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
                                                </li>
                                                <li>
                                                        <a href="#infoRetain">HOW LONG DO WE KEEP YOUR INFORMATION?</a>
                                                </li>
                                                <li>
                                                        <a href="#infoSafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
                                                </li>
                                                <li>
                                                        <a href="#privacyRights">WHAT ARE YOUR PRIVACY RIGHTS ?</a>
                                                </li>
                                                <li>
                                                        <a href="#DNT">CONTROLS FOR DO-NOT-TRACK FEATURES</a>
                                                </li>
                                                <li>
                                                        <a href="#CalResidents">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>
                                                </li>
                                                <li>
                                                        <a href="#policyUpdates">DO WE MAKE UPDATES TO THIS NOTICE?</a>
                                                </li>
                                                <li>
                                                        <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
                                                </li>
                                                <li>
                                                        <a href="#request">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a>
                                                </li>
                                        </ol>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>

                                <section className="pp--section pp--info__item" id="infoCollect">

                                        <h2 className="pp--section-title">1. WHAT INFORMATION DO WE COLLECT?</h2>

                                        <h3 className="section-subtitle" id="personalInfo">Personal information you disclose to us</h3>

                                        <p><em><span className="bold">In Short:</span> We collect personal information that you provide to us.</em></p>

                                        <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

                                        <p><span className="bold">Personal Information Provided by You.</span> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use.The personal information we collect may include the following:</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        names
                                                </li>
                                                <li>
                                                        phone numbers
                                                </li>
                                                <li>
                                                        email addresses
                                                </li>
                                                <li>
                                                        mailing addresses
                                                </li>
                                                <li>
                                                        usernames
                                                </li>
                                                <li>
                                                        passwords
                                                </li>
                                        </ul>

                                        <p>Sensitive Information.We do not process sensitive information.</p>

                                        <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="infoUse">

                                        <h2 className="pp--section-title">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>

                                        <p><em><span className="bold">In Short:</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></p>

                                        <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>

                                        <ul className='pp--ul ul--dec__bullet'>

                                                <li>
                                                        <span className="bold">To facilitate account creation and authentication and otherwise manage user accounts.</span> We may process your information so you can create and log in to your account, as well as keep your account in working order.
                                                </li>
                                                <li>
                                                        <span className="bold">To deliver and facilitate delivery of services to the user.</span> We may process your information to provide you with the requested service.
                                                </li>
                                                <li>
                                                        <span className="bold">To fulfill and manage your orders.</span> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
                                                </li>
                                                <li>
                                                        <span className="bold">To enable user-to-user communications.</span> We may process your information if you choose to use any of our offerings that allow for communication with another user.
                                                </li>
                                                <li>
                                                        <span className="bold">To request feedback.</span> We may process your information when necessary to request feedback and to contact you about your use of our Services.
                                                </li>
                                        </ul>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="legalBases">

                                        <h2 className="pp--section-title">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>

                                        <p><em><span className="bold">In Short:</span> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em></p>

                                        <p className="bold italic underscore"> If you are located in Canada, this section applies to you.</p>

                                        <p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Click <a href="#withdrawConsent">here</a> to learn more.</p>

                                        <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
                                                </li>
                                                <li>
                                                        For investigations and fraud detection and prevention
                                                </li>
                                                <li>
                                                        For business transactions provided certain conditions are met
                                                </li>
                                                <li>
                                                        If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
                                                </li>
                                                <li>
                                                        For identifying injured, ill, or deceased persons and communicating with next of kin
                                                </li>
                                                <li>
                                                        If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
                                                </li>
                                                <li>
                                                        If it is  reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
                                                </li>
                                                <li>
                                                        If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
                                                </li>
                                                <li>
                                                        If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
                                                </li>
                                                <li>
                                                        If the collection is solely for journalistic, artistic, or literary purposes
                                                </li>
                                                <li>
                                                        If the information is publicly available and is specified by the regulations
                                                </li>
                                        </ul>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="whoShare">

                                        <h2 className="pp--section-title">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>

                                        <p><em><span className="bold">In Short:</span> We may share information in specific situations described in this section and/or with the following third parties.</em></p>

                                        <p>We may need to share your personal information in the following situations:</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        <span className="bold">Business Transfers.</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                                </li>
                                        </ul>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id='infoRetain'>

                                        <h2 className="pp--section-title">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>

                                        <p><em><span className="bold">In Short:</span> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em></p>

                                        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than twenty four (24) months past the termination of the user's account.</p>

                                        <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="infoSafe">

                                        <h2 className="pp--section-title">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>

                                        <p><em><span className="bold">In Short:</span> We aim to protect your personal information through a system of organizational and technical security measures.</em></p>

                                        <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cyber criminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="privacyRights">

                                        <h2 className="pp--section-title">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>

                                        <p><em><span className="bold">In Short:</span> In some regions, such as Canada, you have rights that allow you greater access to and control over your personal information.You may review, change, or terminate your account at any time.</em></p>

                                        <p>In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right(i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and(iv) if applicable, to data portability.In certain circumstances, you may also have the right to object to the processing of your personal information.You can make such a request by contacting us by using the contact details provided in the section “<a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>” below.</p>

                                        <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>

                                        <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority.You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.</p>

                                        <p>If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.</p>

                                        <p className="pp--para-title" id="withdrawConsent"><span className="bold underscore">Withdrawing your consent:</span> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time.You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.</p>

                                        <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

                                        <h3 className="pp--section-subtitle">Account Information</h3>

                                        <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        Log in to your account settings and update your user account.
                                                </li>
                                        </ul>

                                        <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

                                        <p>If you have questions or comments about your privacy rights, you may email us at herald.whistler@sample.com.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="DNT">

                                        <h2 className="pp--section-title">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>

                                        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>                                                
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="CalResidents">

                                        <h2 className="pp--section-title">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>

                                        <p><em><span className="bold">In Short:</span> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></p>

                                        <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information(if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year.If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>

                                        <p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services.To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California.We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems(e.g., backups, etc.).</p>

                                        <h3 className='pp--section-subtitle'>CCPA Privacy Notice</h3>

                                        <p>The California Code of Regulations defines a "resident" as:</p>

                                        <ol className='pp--ol ol--dec__parentheses'>
                                                <li>
                                                        every individual who is in the State of California for other than a temporary or transitory purpose and
                                                </li>
                                                <li>
                                                        every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
                                                </li>
                                        </ol>

                                        <p>All other individuals are defined as "non-residents."</p>

                                        <p>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>

                                        <p className="bold">What categories of personal information do we collect?</p>

                                        <p>We have collected the following categories of personal information in the past twelve(12) months:</p>

                                        <table>
                                                <tr>
                                                        <th>Category</th>
                                                        <th>Examples</th>
                                                        <th>Collected</th>
                                                </tr>
                                                <tr>
                                                        <td>A.Identifiers</td>
                                                        <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                                        <td className='pp--center'>NO</td>
                                                </tr>
                                                <tr>
                                                        <td>B. Personal information categories listed in the California Customer Records statute</td>
                                                        <td>Name, contact information, education, employment, employment history, and financial information</td>
                                                        <td className='pp--center'>YES</td>
                                                </tr>
                                                <tr>
                                                        <td>C. Protected classification characteristics under California or federal law</td>
                                                        <td>Gender and date of birth</td>
                                                        <td className='pp--center'>NO</td>
                                                </tr>
                                                <tr>
                                                        <td>D. Commercial information</td>
                                                        <td>Transaction information, purchase history, financial details, and payment information</td>
                                                        <td className='pp--center'>YES</td>
                                                </tr>
                                                <tr>
                                                        <td>E. Biometric information</td>
                                                        <td>Fingerprints and voiceprints</td>
                                                        <td className='pp--center'>NO</td>
                                                </tr>
                                                <tr>
                                                        <td>F. Internet or other similar network activity</td>
                                                        <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                                                        <td className='pp--center'>NO</td>
                                                </tr>
                                                <tr>
                                                        <td>G. Geolocation data</td>
                                                        <td>Device location</td>
                                                        <td className='pp--center'>NO</td>
                                                </tr>
                                                <tr>
                                                        <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                                                        <td>Images and audio, video or call recordings created in connection with our business activities</td>
                                                        <td className='pp--center'>NO</td>
                                                </tr>
                                                <tr>
                                                        <td>I. Professional or employment-related information</td>
                                                        <td>Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                                                        <td className='pp--center'>YES</td>
                                                </tr>
                                                <tr>
                                                        <td>J. Education Information</td>
                                                        <td>Student records and directory information</td>
                                                        <td className='pp--center'>YES</td>
                                                </tr>
                                                <tr>
                                                        <td>K. Inferences drawn from other personal information</td>
                                                        <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                                                        <td className='pp--center'>NO</td>
                                                </tr>
                                        </table>

                                        <p>We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        Receiving help through our customer support channels;
                                                </li>
                                                <li>
                                                        Participation in customer surveys or contests; and
                                                </li>
                                                <li>
                                                        Facilitation in the delivery of our Services and to respond to your inquiries.
                                                </li>
                                        </ul>

                                        <p className="bold">How do we use and share your personal information?</p>

                                        <p>More information about our data collection and sharing practices can be found in this privacy notice.</p>

                                        <p>You may contact us by email at herald.whistler@sample.com, or by referring to the contact details at the bottom of this document.</p>

                                        <p>If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>

                                        <p className="bold">Will your information be shared with anyone else?</p>

                                        <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>

                                        <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>

                                        <p>Herald Octavian Whistler has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Herald Octavian Whistler will not sell personal information in the future belonging to website visitors, users, and other consumers.</p>

                                        <p className="bold">Your rights with respect to your personal data</p>

                                        <p className="underscore pp--para-title">Right to request deletion of the data — Request to delete</p>

                                        <p>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>

                                        <p className="underscore pp--para-title">Right to be informed — Request to know</p>

                                        <p>Depending on the circumstances, you have a right to know:</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        whether we collect and use your personal information;
                                                </li>
                                                <li>
                                                        the categories of personal information that we collect;
                                                </li>
                                                <li>
                                                        the purposes for which the collected personal information is used;
                                                </li>
                                                <li>
                                                        whether we sell your personal information to third parties;
                                                </li>
                                                <li>
                                                        the categories of personal information that we sold or disclosed for a business purpose;
                                                </li>
                                                <li>
                                                        the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
                                                </li>
                                                <li>
                                                        the business or commercial purpose for collecting or selling personal information.
                                                </li>
                                        </ul>

                                        <p>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>

                                        <p className="underscore pp--para-title">Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</p>

                                        <p>We will not discriminate against you if you exercise your privacy rights.</p>

                                        <p className="underscore pp--para-title">Verification process</p>

                                        <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>

                                        <p>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>

                                        <p className="underscore pp--para-title">Other privacy rights</p>

                                        <ul className='pp--ul ul--dec__bullet'>
                                                <li>
                                                        You may object to the processing of your personal information.
                                                </li>
                                                <li>
                                                        You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.
                                                </li>
                                                <li>
                                                        You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
                                                </li>
                                                <li>
                                                        You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.
                                                </li>
                                        </ul>

                                        <p>To exercise these rights, you can contact us by email at or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="policyUpdates">

                                        <h2 className="pp--section-title">10. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                                        
                                        <p><em><span className="bold">In Short:</span> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
                                        
                                        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item" id="contact">

                                        <h2 className="pp--section-title">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>

                                        <p>If you have questions or comments about this notice, you may email us at herald.whistler@sample.com or by post to:</p>

                                        <p>Herald Octavian Whistler<br />
                                        Mr. Whistle's Riverfront Music Emporium<br/>
                                        3910 Wilkinson Street<br/>
                                        Nashville, TN 37201<br/>
                                        United States</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                                
                                <section className="pp--section pp--info__item"  id="request">

                                        <h2 className="pp--section-title">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>

                                        <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <a href="https://app.termly.io/notify/de782ecd-94df-484d-ba78-4ca48f946718" rel="noopener noreferrer" target="_blank">here</a>.</p>
                                </section>

                                <button type="button" onClick={goBack}>
                                        Go back
                                </button>
                        </main>
                </>
        )
}
