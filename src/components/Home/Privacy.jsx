import {Button, Container, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
function Privacy() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <Container style={{background: '#f5f5f5'}}>
            <div style={{
                paddingTop: "120px", paddingBottom: "120px", paddingLeft: "20px", paddingRight: "20px",
                backgroundColor: "white",
            }}>
                {/*<Button variant={'contained'} startIcon={<ArrowBackIcon/>}*/}
                {/*onClick={() => navigate(-1)}>  Back </Button>*/}
                <IconButton>
                    <ArrowBackIcon onClick={() => navigate(-1)}/>
                </IconButton>
                <h1>
                    Terms and Conditions of iCards
                </h1>
                <ol>
                    <b>
                        <li> Our Disclosures
                        </li>
                    </b>
                    <p>
                        Our complete terms and conditions are contained below, but some important points
                        for you to know before you become a customer are set out below:
                        We may amend these Terms, remove features or functionality of the Platform or
                        your Membership at any time
                        We will handle your personal information in accordance with our privacy policy;
                        To the maximum extent permitted by law, the Fees and Product Fees are non-
                        refundable;
                        Our liability under these Terms is limited to us resupplying the Platform to you
                        or, in our sole discretion, to us repaying you the amount of the Fees or Product
                        Fees paid by you to us during the term of your Membership, and we will not be
                        liable for Consequential Loss, any loss that is a result of a Third Party
                        Service, or any loss or corruption of data.
                        We may terminate a Membership immediately to correct a system issue, e.g.
                        account duplication, or if you are found to be misusing the Platform.
                        Nothing in these terms limit your rights under the Bangladeshi Consumer Law.

                    </p>
                    <b>
                        <li> Introduction
                        </li>
                    </b>
                    <p>
                        We provide a cloud-based, software as a service platform where individuals and
                        businesses can manage and share their identity profiles and receive and manage
                        contact information (Platform).
                        In these Terms, you mean the person or entity registered with us as an Account
                        holder or where you do not have an Account, the person or entity using the
                        Platform.
                        If you are using the Platform on behalf of your employer or a business entity,
                        you, in your individual capacity, represent and warrant that you are authorized
                        to act on behalf of your employer or the business entity and to bind the entity
                        and the entity’s personnel to these Terms.

                    </p>
                    <b>
                        <li>
                            Acceptance and Platform Licence
                        </li>
                    </b>
                    <p>
                        You accept these Terms by registering on the Platform and/or using the Platform.
                        You must be at least 18 years old to use the Platform.
                        We may amend these Terms at any time, by providing written notice to you. By
                        continuing to use the Platform after the notice or 30 days after notification
                        (whichever date is earlier), you agree to the amended Terms. If you do not agree
                        to the amendment, you may terminate your Membership in accordance with the
                        “Cancellation of Memberships” clause.
                        If you access or download our mobile application from (1) the Apple App Store,
                        you agree to any Usage Rules set forth in the App Store Terms of Service or (2)
                        the Google Play Store, you agree to the Android, Google Inc. Terms and
                        Conditions including the Google Apps Terms of Service.
                        Subject to your compliance with these Terms, we grant you a personal, non-
                        exclusive, royalty-free, revocable, worldwide, non-transferable license to use
                        our Platform in accordance with these Terms. All other uses are prohibited
                        without our prior written consent.
                        When using the Platform, you must not do or attempt to do anything that is
                        unlawful or inappropriate, including:
                        (a) anything that would constitute a breach of an individual’s privacy
                        (including uploading private or personal information without an individual's
                        consent) or any other legal rights.
                        (b) using the Platform to defame, harass, threaten, menace or offend any person,
                        including using the Platform to send unsolicited electronic messages.
                        (c) tampering with or modifying the Platform (including by transmitting viruses
                        and using trojan horses).
                        (d) using data mining, robots, screen scraping or similar data gathering and
                        extraction tools on the Platform or
                        (e) facilitating or assisting a third party to do any of the above acts.
                    </p>
                    <b>
                        <li>Acceptance and Platform Licence</li>
                    </b>
                    <p>
                        You accept these Terms by registering on the Platform and/or using the Platform.
                        You must be at least 18 years old to use the Platform.
                        We may amend these Terms at any time, by providing written notice to you. By
                        continuing to use the Platform after the notice or 30 days after notification
                        (whichever date is earlier), you agree to the amended Terms. If you do not agree
                        to the amendment, you may terminate your Membership in accordance with the
                        “Cancellation of Memberships” clause.
                        If you access or download our mobile application from (1) the Apple App Store,
                        you agree to any Usage Rules set forth in the App Store Terms of Service or (2)
                        the Google Play Store, you agree to the Android, Google Inc. Terms and
                        Conditions including the Google Apps Terms of Service.
                        Subject to your compliance with these Terms, we grant you a personal, non-
                        exclusive, royalty-free, revocable, worldwide, non-transferable license to use
                        our Platform in accordance with these Terms. All other uses are prohibited
                        without our prior written consent.
                        When using the Platform, you must not do or attempt to do anything that is
                        unlawful or inappropriate, including:
                        (a) anything that would constitute a breach of an individual’s privacy
                        (including uploading private or personal information without an individual's
                        consent) or any other legal rights.
                        (b) using the Platform to defame, harass, threaten, menace or offend any person,
                        including using the Platform to send unsolicited electronic messages.
                        (c) tampering with or modifying the Platform (including by transmitting viruses
                        and using trojan horses).
                        (d) using data mining, robots, screen scraping or similar data gathering and
                        extraction tools on the Platform or
                        (e) facilitating or assisting a third party to do any of the above acts.
                    </p>
                    <b>
                        <li>iCards Services
                        </li>
                    </b>
                    <p>
                        In consideration for your payment of the Fees, we agree to provide you with
                        access to the Platform, the support services as detailed in this section, and
                        any other services we agree to provide as set out in your Account.
                        We agree to use our best endeavors to make the Platform available at all times.
                        However, from time to time we may perform reasonable scheduled and emergency
                        maintenance, and the Platform may be unavailable during the times we are
                        performing such maintenance.
                        Should you be unable to access the Platform, or should you have any other
                        questions or issues impacting on your use and enjoyment of thePlatform, you must
                        place a request via the contact form or via email to
                        support@incrementsinc.com
                        .
                        We will endeavor to respond to any support requests in a reasonable period.
                        You acknowledge and agree that the Platform may be reliant on, or interface with
                        third party systems that are not provided by us (Third Party Services). To the
                        maximum extent permitted by law, we shall have no Liability for any Third Party
                        Services, or any unavailability of the Platform due to a failure of the Third
                        Party Services.
                        You acknowledge and agree that data loss is an unavoidable risk when using any
                        software. To the extent you input any data into the Platform, you agree to
                        maintain a backup copy of any data you input into the Platform.
                        Where your account is linked to a business membership, you acknowledge and agree
                        that your employer, the business entity and third parties may access your data,
                        analytics or other details related to your use of the Platform.
                        To the maximum extent permitted by law, we shall have no Liability to you for
                        any loss or corruption of data, or any scheduled or emergency maintenance that
                        causes the Platform to be unavailable.
                    </p>

                    <b>
                        <li>
                            Products
                        </li>
                    </b>
                    <p>
                        You will be charged for the Products on the basis of volumes and specifications
                        you have elected on our website (Product Fee).
                        Title in the Products will pass from us to you upon full payment of the Product
                        Fee.
                        Once you have placed your order for the Products, you may cancel your order
                        within 24 hours without charge.
                        We may arrange, or a third party may arrange, delivery of the Products to the
                        delivery location you notify to us, at your cost. We accept no responsibility
                        for delayed delivery times or damage to the Products whilst in transit.

                    </p>
                    <b>
                        <li>
                            Accounts
                        </li>
                    </b>
                    <p>
                        You must register on the Platform and create an account (Account) to access the
                        Platform’s features.
                        You must provide basic information when registering for an Account including
                        your email address.
                        All personal information you provide to us will be treated in accordance with
                        our Privacy Policy.
                        You agree to provide and maintain up to date information in your Account and to
                        not share your Account password with any other person. Your Account is personal
                        and you must not transfer or provide it to others.
                        You are responsible for keeping your Account details and your username and
                        password confidential and you will be liable for all activity on your Account,
                        including purchases made using your Account details. You agree to immediately
                        notify us of any unauthorized use of your Account.
                        When you create an Account, you must also select a membership (Membership). You
                        may choose between different tiers of Membership with different services and
                        different membership periods as set out on our Platform.

                    </p>
                    <b>
                        <li>
                            Subscription
                        </li>
                    </b>
                    <p>
                        Your subscription may begin with a free trial. The free trial period of your
                        subscription will last for the period specified in your Account. We determine
                        free trial eligibility in our sole discretion and we may limit eligibility to
                        prevent free trial abuse. We reserve the right to revoke the free trial and
                        suspend your Account at any time in the event that we determine that you are not
                        eligible. Free trials are only available for new Account holders. If you do not
                        cancel during the free trial period, we will charge your chosen payment method
                        for the Membership you have chosen and its corresponding membership fee (Fees)
                        immediately after your free trial ends (Payment Date).
                        Unless your Membership is suspended or terminated in accordance with these
                        Terms, your subscription will roll over on an ongoing monthly or annual basis
                        (based on your subscription), and you will be charged the same Fees on an
                        ongoing monthly or annual basis from the Payment Date. Without limiting your
                        rights under the Bangladeshi Consumer Law, you can cancel your subscription at
                        any time in accordance with the “Cancellation of subscription” clause of these
                        Terms but the cancellation will only have effect from expiry of your monthly or
                        annual subscription period for which you have paid the Fees.
                        The payment methods we offer for the Fees are set out on the Platform. We may
                        offer payment through a third-party provider for example, Stripe. You
                        acknowledge and agree that we have no control over the actions of the third-
                        party provider, and your use of the third-party payment method may be subject to
                        additional terms and conditions.
                        You must not pay, or attempt to pay, the Fees by fraudulent or unlawful means.
                        If you make a payment by debit card or credit card, you warrant that you are
                        authorized to use the debit card or credit card to make the payment.
                        You agree that we may set-off or deduct from any monies payable to you under
                        these Terms, any amounts which are payable by you to us (whether under these
                        Terms or otherwise).
                        We do not store any credit card details, and all payment information is
                        collected and stored through our third-party payment processors.
                        Changes to your subscription:
                        If you wish to suspend or change your
                        subscription (for example, by upgrading to a different subscription tier), you
                        must provide notice to us through your Account or via email at
                        support@incrementsinc.com
                        that you wish to suspend or vary your subscription at
                        least 24 hours before the next Payment Date. If you vary your subscription and
                        the Fees increase, the increased Fees will apply on the next Payment Date, pro-
                        rated for the time between the date you vary your subscription, and the next
                        Payment Date, and you will have access to the additional subscription features
                        within 24 hours following your subscription change.
                        To the extent permitted by law, the Fees and Product Fees are non-refundable and
                        non-cancellable once paid.
                        We may need to change what is available as part of your Membership (for example,
                        the inclusions, exclusions, updated features) from time to time. If we remove
                        any features or functionality, we will provide you with 30 days’ notice of the
                        change. After 30 days, we will apply the changes to your Membership. If the
                        changes substantially and adversely affect your enjoyment of the Membership, you
                        may cancel your Membership in accordance with the ‘Cancellation of Memberships’
                        clause.
                        We may need to change the Fees from time to time. If we change the Fees, we will
                        provide you with 30 days’ notice of the change. After 30 days, we will apply the
                        updated Fee to your Membership. If the updated Fee is not acceptable to you, you
                        may cancel your Membership in accordance with the ‘Cancellation of Memberships’
                        clause.

                    </p>
                    <b>
                        <li>
                            Our Intellectual Property

                        </li>
                    </b>
                    <p>
                        You acknowledge and agree that any Intellectual Property or content (including
                        copyright and trademarks) available on the Platform, the Platform itself, and
                        any algorithms or machine learning models used on the Platform (Our Intellectual
                        Property) will at all times vest, or remain vested, in us.
                        We authorize you to use Our Intellectual Property solely for your limited
                        commercial use. You must not exploit Our Intellectual Property for any other
                        purpose, nor allow, aid or facilitate such use by any third party. Use must be
                        limited to devices that are controlled or approved by you.
                        You must not, directly or indirectly: (a) enable any person or entity other than
                        authorized users to access and use the Platform or Products; (b) attempt to gain
                        unauthorized access to any Platform or its related systems or networks; (c) use
                        or access our Intellectual Property except in accordance with these Terms; (d)
                        modify, copy or create any derivative work based upon ourPlatform or Products or
                        any portion, feature or function of our Platform orProducts; (e) reverse
                        engineer, disassemble or decompile all or any portion of, or attempt to discover
                        or recreate the source code for, the Platform orProducts or access or use the
                        Platform or Products in order to (1) copy ideas, features, functions or
                        graphics, (2) develop competing products or services, or (3) perform competitive
                        analysis; (g) remove, obscure or alter any proprietary notice related to the
                        Platform or Products; (h) send or store malicious code; (i) use or permit others
                        to use the Platform or Products in violation of applicable law; or (j) use or
                        permit others to use the Platform or Products other than as described in these
                        Terms.
                        You must not, without our prior written consent:
                        (a) copy, in whole or in part, any of Our Intellectual Property;
                        (b) reproduce, retransmit, distribute, disseminate, sell, publish, broadcast or
                        circulate any of Our Intellectual Property to any third party; or
                        (c) breach any intellectual property rights connected with the Platform,
                        including (without limitation) altering or modifying any of Our Intellectual
                        Property, causing any of Our Intellectual Property to be framed or embedded in
                        another website, or creating derivative works from any of Our Intellectual
                        Property.
                        8.5. Nothing in the above clause restricts your ability to publish, post or
                        repost Our Intellectual Property on your social media page or blog, provided
                        that:
                        (a) you do not assert that you are the owner of Our Intellectual Property;
                        (b) unless explicitly agreed by us in writing, you do not assert that you are
                        endorsed or approved by us;
                        (c) you do not damage or take advantage of our reputation, including in a
                        manner that is illegal, unfair, misleading or deceptive; and
                        (d) you comply with all other terms of these Terms.
                        This clause will survive the termination or expiry of your Membership.

                    </p>
                    <b>
                        <li>
                            Your Data
                        </li>
                    </b>
                    <p>
                        You own all data, information or content you upload into the Platform (Your
                        Data), as well as any data or information output from the Platform using Your
                        Data as input (Output Data). Note that Output Data does not include the
                        Analytics (as described below).
                        You grant us an unlimited, worldwide, perpetual, royalty-free and assignable
                        license to copy, transmit, store, backup and/or otherwise access or use Your
                        Data and the Output Data to:
                        (a) communicate with you (including to send you information we believe may be of
                        interest to you).
                        (b) supply the Platform to you and otherwise perform our obligations under these
                        Terms.
                        (c) diagnose problems with the Platform.
                        (d) enhance and otherwise modify the Platform.
                        (e) perform Analytics.
                        (f) develop other services, provided we de-identify Your Data and
                        (g) as reasonably required to perform our obligations under these Terms.
                        You agree that you are solely responsible for all of Your Data that you make
                        available on or through the Platform. You represent and warrant that:
                        (a) you are either the sole and exclusive owner of Your Data or you have all
                        rights, licences, consents and releases that are necessary to grant to us the
                        rights in Your Data (as contemplated by these Terms) and
                        (b) neither Your Data nor the posting, uploading, publication, submission or
                        transmission of Your Data or our use of Your Data on, through or by means of our
                        Platform will infringe, misappropriate or violate a third party’s intellectual
                        property rights, or rights of publicity or privacy, or result in the violation
                        of any applicable law or regulation.
                        You acknowledge and agree that we may monitor, analyze and compile statistical
                        and performance information based on and/or related to your use of the Platform,
                        in an aggregated and anonymised format (Analytics). You acknowledge and agree
                        that we own all rights in the Analytics, and that we may use the Analytics for
                        our own internal business purposes, provided that the Analytics do not contain
                        any identifying information.
                        We do not endorse or approve, and are not responsible for, any of Your Data.
                        You acknowledge and agree that the Platform and the integrity and accuracy of
                        the Output Data is reliant on the accuracy and completeness of Your Data, and
                        the provision by you of Your Data that is inaccurate or incomplete may affect
                        the use, output and operation of the Platform.
                        This clause will survive the termination or expiry of your Membership.

                    </p>
                    <b>
                        <li>
                            Warranties
                        </li>
                    </b>
                    <p>
                        You represent, warrant and agree that:
                        (a) you will not use our Platform, including Our Intellectual Property, in any
                        way that competes with our business.
                        (b) there are no legal restrictions preventing you from entering into these
                        Terms.
                        (c) all information and documentation that you provide to us in connection with
                        these Terms is true, correct and complete and
                        (d) you have not relied on any representations or warranties made by us in
                        relation to the Platform (including as to whether the Platform is or will be fit
                        or suitable for your particular purposes), unless expressly stipulated in these
                        Terms.

                    </p>
                    <b>
                        <li>
                            Liability
                        </li>
                    </b>
                    <p>
                        Despite anything to the contrary, to the maximum extent permitted by law:
                        (a) you agree to indemnify us for any Liability we incur due to your breach of
                        the Acceptance and Platform Licence clause and the Intellectual Property clause
                        of these Terms.
                        (b) neither Party will be liable for Consequential Loss.
                        (c) each Party’s liability for any Liability under these Terms will be reduced
                        proportionately to the extent the relevant Liability was caused or contributed
                        to by the acts or omissions of the other Party or any of that Party’s personnel,
                        including any failure by that Party to mitigate its losses and
                        (d) our aggregate liability for any Liability arising from or in connection with
                        theseTerms will be limited to us resupplying the Platform to you or, in our sole
                        discretion, to us repaying you the amount of the Fees and Product Fees paid by
                        you to us during the term of your Membership.
                        This clause will survive the termination or expiry of your subscription.

                    </p>
                    <b>
                        <li>
                            Termination
                        </li>
                    </b>
                    <p>
                        <b>Cancellation of Memberships:
                        </b>
                        You may request to cancel your Membership at any
                        time by notifying us via email at
                        support@incrementsinc.com
                        or via the Platform.
                        You may cancel your Membership at any time. Your cancellation will take effect
                        from the end of the minimum period. If you cancel your subscription because we
                        have changed the subscription inclusions and the change has a substantial and
                        adverse impact on you, or we have changed the Fees, then the termination of the
                        subscription will be immediate, and we will refund you for any Fees that you
                        have paid upfront but have not been used on a pro-rata basis.
                        Our auto renewable in-app purchase subscriptions can only be canceled using the
                        App Store or Google Play cancelation services.
                        We may terminate your subscription at any time by giving 30 days’ written notice
                        to you (Termination for Convenience).
                        A Membership will terminate immediately upon written notice by a Party (Non-
                        Defaulting Party) if:
                        (a) the other Party (Defaulting Party) breaches a material term of these Terms
                        that breach has not been remedied within 10 Business Days of the Defaulting
                        Party being notified of the breach by the Non-Defaulting Party or
                        (b) the Defaulting Party is unable to pay its debts as they fall due.
                        Should we suspect that you are in breach of these Terms, we may suspend your
                        access to the Platform while we investigate the suspected breach.
                        We may terminate a Membership immediately to correct a system issue, e.g.,
                        account duplication, or if you are found to be misusing the Platform.
                        Upon expiry or termination of your Membership:
                        (a) we will remove your access to the Platform;
                        (b) you agree that other than where termination is due to our Termination for
                        Convenience or our breach of these Terms, and to the maximum extent permitted by
                        law, any payments made by you to us (including any Fees and Product Fees) are
                        not refundable to you;
                        (c) where we terminate your Membership for any reason other than a Termination
                        for Convenience, you also agree to pay us our reasonable additional costs
                        directly arising from such termination.
                        Where termination is due to our Termination for Convenience or our breach of
                        these Terms, we agree to refund you for any prepaid unused Fees on a pro-rata
                        basis.
                        Termination of a subscription will not affect any rights or liabilities that a
                        Party has accrued under these Terms.
                        This clause will survive the termination or expiry of your subscription.

                    </p>
                    <b>
                        <li>
                            Notice Regarding Apple
                        </li>
                    </b>
                    <p>
                        To the extent that you are using or accessing our Platform on an iOS device, you
                        further acknowledge and agree to the terms of this clause. You acknowledge that
                        these Terms are between you and us only, not with Apple Inc. (Apple), and Apple
                        is not responsible for the Platform and any content available on the Platform.
                        Apple has no obligation to furnish you with any maintenance and support services
                        with respect to our Platform.
                        If our mobile application fails to conform to any applicable warranty, you may
                        notify Apple and Apple will refund the purchase price of the mobile application
                        to you. To the maximum extent permitted by applicable law, Apple will have no
                        other warranty obligation whatsoever with respect to the mobile application and
                        any other claims, losses, liabilities, damages, costs or expenses attributable
                        to any failure to conform to any warranty will be our responsibility.
                        Apple is not responsible for addressing any claims by you or any third party
                        relating to our mobile application or your use of our mobile application,
                        including but not limited to: (1) product liability claims; (2) any claim that
                        our mobile application fails to conform to any applicable legal or regulatory
                        requirement; and (3) claims arising under consumer protection or similar
                        legislation.
                        Apple is not responsible for the investigation, defense, settlement and
                        discharge of any third-party claim that our mobile application infringes that
                        third party’s intellectual property rights.
                        You agree to comply with any applicable third-party terms when using our mobile
                        application.
                        Apple and Apple subsidiaries are third-party beneficiaries of these Terms, and
                        upon your acceptance of these Terms, Apple will have the right (and will be
                        deemed to have accepted the right) to enforce these Terms against you as a
                        third-party beneficiary of these Terms.
                        You hereby represent and warrant that: (1) you are not located in a country that
                        is subject to a U.S. Government embargo, or that has been designated by the U.S.
                        Government as a "terrorist supporting"country; and (2) you are not listed on any
                        U.S. Government list of prohibited or restricted parties.

                    </p>
                    <b>
                        <li>
                            General
                        </li>
                    </b>
                    <p>
                        <b>Assignment:</b> <br/>
                        Subject to the below clause, a Party must not assign or deal with
                        the whole or any part of its rights or obligations under these Terms without the
                        prior written consent of the other Party (such consent is not to be unreasonably
                        withheld).
                        <b>Assignment of Debt:</b> <br/>
                        You agree that we may assign or transfer any debt owed by
                        you to us, arising under or in connection with these Terms, to a debt collector,
                        debt collection agency, or other third party.
                        <b>Disputes: </b> <br/>
                        A Party may not commence court proceedings relating to a dispute
                        without first meeting with the other Party to seek (in good faith) to resolve
                        the dispute, failing which the Parties agree to engage a mediator to attempt to
                        resolve the dispute. The costs of the mediation will be shared equally between
                        the Parties. Nothing in this clause will operate to prevent a Party from seeking
                        urgent injunctive or equitable relief from a court of appropriate jurisdiction.
                        <b>Entire Terms: </b> <br/>
                        Subject to your Consumer Law Rights, these Terms contain the
                        entire understanding between the Parties and the Parties agree that no
                        representation or statement has been made to, or relied upon by, either of the
                        Parties, except as expressly stipulated in these Terms, and these Terms
                        supersede all previous discussions, communications, negotiations,
                        understandings, representations, warranties, commitments and agreements, in
                        respect of its subject matter.
                        <b>Force Majeure: </b> <br/>
                        To the maximum extent permitted by law, we shall have no
                        Liability for any event or circumstance outside of our reasonable control.
                        <b>Governing law: </b> <br/>
                        This Agreement is governed by the laws of Victoria, Australia.
                        Each Party irrevocably and unconditionally submits to the exclusive jurisdiction
                        of the courts operating in Victoria and any courts entitled to hear appeals from
                        those courts and waives any right to object to proceedings being brought in
                        those courts.
                        <b>Notices: </b> <br/>
                        Any notice given under these Terms must be in writing addressed to us
                        at the details set out below or to you at the details provided in your Account.
                        Any notice may be sent by standard post or email, and will be deemed to have
                        been served on the expiry of 48 hours in the case of post, or at the time of
                        transmission in the case of transmission by email.
                        <b>Privacy: </b> <br/>
                        Each Party agrees to comply with the legal requirements of the
                        Bangladeshi Privacy Principles as set out in the Privacy Act 1988 (Cth) and any
                        other applicable legislation or privacy guidelines.
                        <b>Publicity: </b> <br/>
                        With your prior written consent, You agree that we may advertise or
                        publicize the fact that you are a user of our Platform, including on our website
                        or in our promotional material.
                        <b>Severance: </b> <br/>
                        If a provision of these Terms is held to be void, invalid, illegal or
                        unenforceable, that provision is to be read down as narrowly as necessary to
                        allow it to be valid or enforceable, failing which, that provision (or that part
                        of that provision) will be severed from these Terms without affecting the
                        validity or enforceability of the remainder of that provision or the other
                        provisions in these Terms.
                        <b>Third party sites: </b> <br/>
                        The Platform may contain links to websites operated by third
                        parties. Unless we tell you otherwise, we do not control, endorse or approve,
                        and are not responsible for, the content on those websites. We recommend that
                        you make your own investigations with respect to the suitability of those
                        websites. If you purchase goods or services from a third party website linked
                        from the Platform, such a third party provides the goods and services to you,
                        not us.
                    </p>
                    <b>
                        <li>
                            Definitions
                        </li>
                    </b>
                    <p>
                        Consequential Loss includes any consequential loss, indirect loss, real or
                        anticipated loss of profit, loss of benefit, loss of revenue, loss of business,
                        loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss
                        of use and/or loss or corruption of data, whether under statute, contract,
                        equity, tort (including negligence), indemnity or otherwise.
                        Intellectual Property means any domain names, know-how, inventions, processes,
                        trade secrets or confidential information; or circuit layouts, software,
                        computer programs, databases or source codes, including any application, or
                        right to apply, for registration of, and any improvements, enhancements or
                        modifications of, the foregoing.
                        Liability means any expense, cost, liability, loss, damage, claim, notice,
                        entitlement, investigation, demand, proceeding or judgment (whether under
                        statute, contract, equity, tort (including negligence), indemnity or otherwise),
                        howsoever arising, whether direct or indirect and/or whether present,
                        unascertained, future or contingent and whether involving a third party or a
                        party to these Terms or otherwise.

                    </p>

                </ol>
                <h1 style={{marginTop: "40px"}}>Privacy Policy </h1>
                <div style={{padding: "20px"}}>
                    <b>
                        Our Privacy Principles
                    </b>
                    <p>
                        At the core of iCards product is the enablement of sharing your information with those you want
                        to
                        share with. As a result, data privacy is critical to the product we offer. At iCards, we believe
                        in
                        the importance of being able to
                        control who gets that information.
                        To reflect this importance we've designed our product with made several principles in mind that
                        are
                        intended to protect your data and privacy:
                    </p>
                    <b>
                        Your data is yours
                    </b>
                    <p>
                        We don't sell or provide your data to third parties without your consent. It's
                        just not what we do here at iCards. Your data is yours to share with your
                        network.

                    </p>

                    <b>
                        Secure Storage

                    </b>
                    <p>
                        Your data is protected by Enterprise grade encryption and security.

                    </p>

                    <b>
                        Safe Sharing
                    </b>
                    <p>
                        Every Card of iCards has a unique code and web address. Those you share your
                        information with will be able to look at your details. If they share your card
                        with others or their company, others may be able to view your details.

                    </p>

                    <b>
                        Introduction
                    </b>
                    <p>
                        This privacy policy ("Policy") describes how the personally identifiable
                        information ("Personal Information") you may provide in the "iCards" mobile
                        application ("Mobile Application" or "Service") and any of its related products
                        and services (collectively, "Services") is collected, protected and used. It
                        also describes the choices available to you regarding our use of your Personal
                        Information and how you can access and update this information. This Policy is a
                        legally binding agreement between you ("User", "you" or "your") and iCards
                        ("we", "us" or "our", "iCards"). iCards is the company name of the operator of
                        the Business Card Application ("iCards"). By accessing and using the Software
                        Applications and Services, you acknowledge that you have read, understood, and
                        agree to be bound by the terms of this Agreement. This Policy does not apply to
                        the practices of companies that we do not own or control, or to individuals that
                        we do not employ or manage.

                    </p>

                    <b>
                        Automatic collection of information
                    </b>
                    <p>
                        Our top priority is customer data security and, as such, we exercise the no logs
                        policy. We may process only minimal user data, only as much as it is absolutely
                        necessary to maintain the Software Applications and Services. Information
                        collected automatically is used only to identify potential cases of abuse and
                        establish statistical information regarding the usage of the Software
                        Application and Services. This statistical information is not otherwise
                        aggregated in such a way that would identify any particular user of the system.

                    </p>

                    <b>
                        Collection of personal information
                    </b>
                    <p>
                        You can access and use the Software Application and Services without telling us
                        who you are or revealing any information by which someone could identify you as
                        a specific, identifiable individual. If, however, you wish to use some of the
                        features in the Software Applications, you may be asked to provide certain
                        Personal Information (for example, your name and email address). We receive and
                        store any information you knowingly provide to us when you create an account,
                        make a purchase, or fill any online forms in the Software Applications. When
                        required, this information may include the following:
                        - Personal details such as name, country of residence, etc.
                        - Contact information such as email address, address, etc.
                        - Account details such as user name, unique user ID, password, etc.
                        - Payment information such as credit card details, bank details, etc.
                        - Geolocation data such as latitude and longitude.
                        - Certain features on the mobile device such as contacts, calendar, gallery,
                        etc.
                        Some of the information we collect is directly from you via the Software
                        Applications and Services. However, we may also collect Personal Information
                        about you from other sources such as public databases, social media platforms,
                        third-party data providers, and our joint marketing partners. Personal
                        Information we collect from other sources may include demographic information,
                        such as age and gender, device information, such as IP addresses, location, such
                        as city and state, and online behavioral data, such as information about your
                        use of social media websites, page view information and search results and
                        links. You can choose not to provide us with your Personal Information, but then
                        you may not be able to take advantage of some of the features in the Software
                        Applications. Users who are uncertain about what information is mandatory are
                        welcome to contact us.

                    </p>

                    <b>
                        Use and processing of collected information
                    </b>
                    <p>
                        In order to make the Software Applications and Services available to you, or to
                        meet a legal obligation, we need to collect and use certain Personal
                        Information. If you do not provide the information that we request, we may not
                        be able to provide you with the requested products or services. Any of the
                        information we collect from you may be used for the following purposes:
                        - Create and manage user accounts
                        - Deliver products or services
                        - Improve products and services
                        - Send administrative information
                        - Respond to inquiries and offer support
                        - Request user feedback
                        - Improve user experience
                        - Enforce terms and conditions and policies
                        - Protect from abuse and malicious users
                        - Respond to legal requests and prevent harm
                        - Run and operate the Software Applications and Services
                        Processing your Personal Information depends on how you interact with the
                        Software Application and Services, where you are located in the world and if one
                        of the following applies: (i) you have given your consent for one or more
                        specific purposes; this, however, does not apply, whenever the processing of
                        Personal Information is subject to Bangladeshi Consumer Privacy Act or
                        Bangladeshi data protection law; (ii) provision of information is necessary for
                        the performance of an agreement with you and/or for any pre-contractual
                        obligations thereof; (iii) processing is necessary for compliance with a legal
                        obligation to which you are subject; (iv) processing is related to a task that
                        is carried out in the public interest or in the exercise of official authority
                        vested in us; (v) processing is necessary for the purposes of the legitimate
                        interests pursued by us or by a third party.
                        Note that under some legislations we may be allowed to process information until
                        you object to such processing (by opting out), without having to rely on consent
                        or any other of the following legal bases below. In any case, we will be happy
                        to clarify the specific legal basis that applies to the processing, and in
                        particular whether the provision of Personal Information is a statutory or
                        contractual requirement, or a requirement necessary to enter into a contract.

                    </p>

                    <b>
                        Billing and payments

                    </b>
                    <p>
                        We use third party payment processors to assist us in processing your payment
                        information securely. Such third party processors' use of your Personal
                        Information is governed by their respective privacy policies which may or may
                        not contain privacy protections as protective as this Policy. We suggest that
                        you review their respective privacy policies.

                    </p>

                    <b>
                        Managing information

                    </b>
                    <p>
                        You are able to delete certain Personal Information we have about you. The
                        Personal Information you can delete may change as the Mobile Application and
                        Services change. When you delete Personal Information, however, we may maintain
                        a copy of the unrevised Personal Information in our records for the duration
                        necessary to comply with our obligations to our affiliates and partners, and for
                        the purposes described below. If you would like to delete your Personal
                        Information or permanently delete your account, you can do so by contacting us.

                    </p>

                    <b>
                        Disclosure of information

                    </b>
                    <p>
                        Depending on the requested Services or as necessary to complete any transaction
                        or provide any service you have requested, we may share your information with
                        your consent with our trusted third parties that work with us, any other
                        affiliates and subsidiaries we rely upon to assist in the operation of the
                        Software Applications and Services available to you. We do not share Personal
                        Information with unaffiliated third parties. These service providers are not
                        authorized to use or disclose your information except as necessary to perform
                        services on our behalf or comply with legal requirements. We may share your
                        Personal Information for these purposes only with third parties whose privacy
                        policies are consistent with ours or who agree to abide by our policies with
                        respect to Personal Information. These third parties are given Personal
                        Information they need only in order to perform their designated functions, and
                        we do not authorize them to use or disclose Personal Information for their own
                        marketing or other purposes.
                        We will disclose any Personal Information we collect, use or receive if required
                        or permitted by law, such as to comply with a subpoena, or similar legal
                        process, and when we believe in good faith that disclosure is necessary to
                        protect our rights, protect your safety or the safety of others, investigate
                        fraud, or respond to a government request.
                        In the event we go through a business transition, such as a merger or
                        acquisition by another company, or sale of all or a portion of its assets, your
                        user account, and Personal Information will likely be among the assets
                        transferred.

                    </p>

                    <b>
                        Retention of information
                    </b>
                    <p>
                        We will retain and use your Personal Information for the period necessary to
                        comply with our legal obligations, resolve disputes, and enforce our agreements
                        unless a longer retention period is required or permitted by law. We may use any
                        aggregated data derived from or incorporating your Personal Information after
                        you update or delete it, but not in a manner that would identify you personally.
                        Once the retention period expires, Personal Information shall be deleted.
                        Therefore, the right to access, the right to erasure, the right to rectification
                        and the right to data portability cannot be enforced after the expiration of the
                        retention period.

                    </p>

                    <b>
                        Transfer of information
                    </b>
                    <p>
                        Depending on your location, data transfers may involve transferring and storing
                        your information in a country other than your own. You are entitled to learn
                        about the legal basis of information transfers to a country outside the European
                        Union or to any international organization governed by public international law
                        or set up by two or more countries, such as the UN, and about the security
                        measures taken by us to safeguard your information. If any such transfer takes
                        place, you can find out more by checking the relevant sections of this Policy or
                        inquire with us using the information provided in the contact section.

                    </p>

                    <b>
                        The rights of users
                    </b>
                    <p>
                        You may exercise certain rights regarding your information processed by us. In
                        particular, you have the right to do the following: (i) you have the right to
                        withdraw consent where you have previously given your consent to the processing
                        of your information; (ii) you have the right to object to the processing of your
                        information if the processing is carried out on a legal basis other than
                        consent; (iii) you have the right to learn if information is being processed by
                        us, obtain disclosure regarding certain aspects of the processing and obtain a
                        copy of the information undergoing processing; (iv) you have the right to verify
                        the accuracy of your information and ask for it to be updated or corrected; (v)
                        you have the right, under certain circumstances, to restrict the processing of
                        your information, in which case, we will not process your information for any
                        purpose other than storing it; (vi) you have the right, under certain
                        circumstances, to obtain the erasure of your Personal Information from us; (vii)
                        you have the right to receive your information in a structured, commonly used
                        and machine readable format and, if technically feasible, to have it transmitted
                        to another controller without any hindrance. This provision is applicable
                        provided that your information is processed by automated means and that the
                        processing is based on your consent, on a contract which you are part of or on
                        pre-contractual obligations thereof.

                    </p>

                    <b>
                        The right to object to processing

                    </b>
                    <p>
                        Where Personal Information is processed for the public interest, in the exercise
                        of an official authority vested in us or for the purposes of the legitimate
                        interests pursued by us, you may object to such processing by providing a ground
                        related to your particular situation to justify the objection. You must know
                        that, however, should your Personal Information be processed for direct
                        marketing purposes, you can object to that processing at any time without
                        providing any justification. To learn whether we are processing Personal
                        Information for direct marketing purposes, you may refer to the relevant
                        sections of this document.

                    </p>

                    <b>
                        Data protection rights under GDPR
                    </b>
                    <p>
                        If you are a resident of Bangladesh, you have certain data protection rights and
                        iCards aims to take reasonable steps to allow you to correct, amend, delete, or
                        limit the use of your Personal Information. If you wish to be informed what
                        Personal Information we hold about you and if you want it to be removed from our
                        systems, please contact us. In certain circumstances, you have the following
                        data protection rights:
                        - You have the right to request access to your Personal Information that we
                        store and have the ability to access your Personal Information.
                        - You have the right to request that we correct any Personal Information you
                        believe is inaccurate. You also have the right to request us to complete the
                        Personal Information you believe is incomplete.
                        - You have the right to request the erasure of your Personal Information under
                        certain conditions of this Policy.
                        - You have the right to object to our processing of your Personal Information.
                        - You have the right to seek restrictions on the processing of your Personal
                        Information. When you restrict the processing of your Personal Information, we
                        may store it but will not process it further.
                        - You have the right to be provided with a copy of the information we have on
                        you in a structured, machine-readable and commonly used format.
                        - You also have the right to withdraw your consent at any time where iCards
                        Technologies Pty Ltd relied on your consent to process your Personal
                        Information.
                        You have the right to complain to a Data Protection Authority about our
                        collection and use of your Personal Information. For more information, please
                        contact your local data protection authority in Bangladesh.

                    </p>

                    <b>
                        Privacy of children
                    </b>
                    <p>
                        We do not knowingly collect any Personal Information from children under the age
                        of 18. If you are under the age of 18, please do not submit any Personal
                        Information through the Software Applications and Services. We encourage parents
                        and legal guardians to monitor their children's Internet usage and to help
                        enforce this Policy by instructing their children never to provide Personal
                        Information through the Software Applications and Services without their
                        permission. If you have reason to believe that a child under the age of 18 has
                        provided Personal Information to us through the Software Applications and
                        Services, please contact us. You must also be at least 16 years of age to
                        consent to the processing of your Personal Information in your country (in some
                        countries we may allow your parent or guardian to do so on your behalf).

                    </p>

                    <b>
                        Advertisements
                    </b>
                    <p>
                        We may display online advertisements and we may share aggregated and non-
                        identifying information about our customers that we or our advertisers collect
                        through your use of the Software Applications and Services. We do not share
                        personally identifiable information about individual customers with advertisers.
                        In some instances, we may use this aggregated and non-identifying information to
                        deliver tailored advertisements to the intended audience.

                    </p>

                    <b>
                        Email marketing

                    </b>
                    <p>
                        We offer electronic newsletters to which you may voluntarily subscribe at any
                        time. We are committed to keeping your e-mail address confidential and will not
                        disclose your email address to any third parties except as allowed in the
                        information use and processing section or for the purposes of utilizing a third
                        party provider to send such emails. We will maintain the information sent via
                        email in accordance with applicable laws and regulations.
                        In compliance with the CAN-SPAM Act, all e-mails sent from us will clearly state
                        who the email is from and provide clear information on how to contact the
                        sender. You may choose to stop receiving our newsletter or marketing emails by
                        following the unsubscribe instructions included in these emails or by contacting
                        us. However, you will continue to receive essential transactional emails.

                    </p>

                    <b>
                        Links to other resources

                    </b>
                    <p>
                        The Software Applications and Services contain links to other resources that are
                        not owned or controlled by us. Please be aware that we are not responsible for
                        the privacy practices of such other resources or third parties. We encourage you
                        to be aware when you leave the Software Applications and Services and to read
                        the privacy statements of each and every resource that may collect Personal
                        Information.

                    </p>

                    <b>
                        Information security

                    </b>
                    <p>
                        We secure information you provide on computer servers in a controlled, secure
                        environment, protected from unauthorized access, use, or disclosure. We maintain
                        reasonable administrative, technical, and physical safeguards in an effort to
                        protect against unauthorized access, use, modification, and disclosure of
                        Personal Information in its control and custody. However, no data transmission
                        over the Internet or wireless network can be guaranteed. Therefore, while we
                        strive to protect your Personal Information, you acknowledge that (i) there are
                        security and privacy limitations of the Internet which are beyond our control;
                        (ii) the security, integrity, and privacy of any and all information and data
                        exchanged between you and the Software Applications and Services cannot be
                        guaranteed; and (iii) any such information and data may be viewed or tampered
                        with in transit by a third party, despite best efforts.

                    </p>

                    <b>
                        Data breach

                    </b>
                    <p>
                        In the event we become aware that the security of the Software Applications and
                        Services has been compromised or users Personal Information has been disclosed
                        to unrelated third parties as a result of external activity, including, but not
                        limited to, security attacks or fraud, we reserve the right to take reasonably
                        appropriate measures, including, but not limited to, investigation and
                        reporting, as well as notification to and cooperation with law enforcement
                        authorities. In the event of a data breach, we will make reasonable efforts to
                        notify affected individuals if we believe that there is a reasonable risk of
                        harm to the user as a result of the breach or if notice is otherwise required by
                        law. When we do, we will post a notice in the Software Applications, send you an
                        email.

                    </p>

                    <b>
                        Changes and amendments

                    </b>
                    <p>
                        We reserve the right to modify this Policy or its terms relating to the Software
                        Applications and Services from time to time in our discretion and will notify
                        you of any material changes to the way in which we treat Personal Information.
                        When we do, we will send you an email to notify you. We may also provide notice
                        to you in other ways at our discretion, such as through contact information you
                        have provided. Any updated version of this Policy will be effective immediately
                        upon the posting of the revised Policy unless otherwise specified. Your
                        continued use of the Software Applications and Services after the effective date
                        of the revised Policy (or such other act specified at that time) will constitute
                        your consent to those changes. However, we will not, without your consent, use
                        your Personal Information in a manner materially different from what was stated
                        at the time your Personal Information was collected.

                    </p>

                    <b>
                        Acceptance of this policy

                    </b>
                    <p>
                        You acknowledge that you have read this Policy and agree to all its terms and
                        conditions. By accessing and using the Software Applications and Services you
                        agree to be bound by this Policy. If you do not agree to abide by the terms of
                        this Policy, you are not authorized to access or use the Software Applications
                        and Services.

                    </p>

                    <b>
                        Contacting us
                    </b>
                    <p>
                        If you would like to contact us to understand more about this Policy or wish to
                        contact us concerning any matter relating to individual rights and your Personal
                        Information, you may do so via the contact form or send an email to
                        support@incrementsinc.com

                    </p>


                </div>

            </div>
        </Container>

    );
}

export default Privacy;
