import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedInLogoIcon, EnvelopeClosedIcon, DrawingPinFilledIcon } from "@radix-ui/react-icons"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg">
            <AvatarImage src="https://avatars.githubusercontent.com/u/48630437?v=4" alt="Asif Shariar Likhon" />
            <AvatarFallback>ASL</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Asif Shariar Likhon</h1>
          <p className="text-xl text-blue-700 mb-4">Strategic Growth Architect & Business Developer</p>
          <div className="flex justify-center items-center space-x-4 text-zinc-600">
            <span className="flex items-center">
              <DrawingPinFilledIcon className="mr-2" />
              Dhaka, Bangladesh
            </span>
            <a href="mailto:asif.shariar11@gmail.com" className="flex items-center hover:text-blue-800 transition-colors">
              <EnvelopeClosedIcon className="mr-2" />
              Email
            </a>
            <a href="https://linkedin.com/in/asiflikhon11" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-800 transition-colors">
              <LinkedInLogoIcon className="mr-2" />
              LinkedIn
            </a>
          </div>
        </header>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Dynamic Business Development Specialist with extensive experience in growth strategies, client
              acquisition, and digital marketing. Proven track record of driving revenue, optimizing CAC, and
              implementing scalable systems for startups and established organizations. Proficient in
              leveraging tools like HubSpot, Google Ads, and Klaviyo, with strong technical expertise in Java,
              Python, and digital marketing analytics. Passionate about aligning business goals with
              innovative strategies to deliver measurable results.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Core Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Strategic Business Planning",
                "Data-Driven Decision Making",
                "Digital Marketing Automation",
                "Growth Strategy Development",
                "Market Research and Analysis",
                "CRM and Lead Management",
                "Sales Funnel Optimization",
                "Programming in Java and Python"
              ].map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 cursor-alias transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title: "Growth Specialist (Part-Time)",
                  company: "Oonkoo.com",
                  period: "October 2023 – Present",
                  achievements: [
                    "Implemented HubSpot marketing tools and maintained client relationships.",
                    "Acted as a product owner for client communication and project delivery."
                  ]
                },
                {
                  title: "Chief Marketing Officer",
                  company: "Stickon.xyz",
                  period: "January 2024 – December 2024",
                  achievements: [
                    "Secured Shark Tank investment by reorganizing 8 years of business data.",
                    "Reduced customer acquisition costs (CAC) by 45%.",
                    "Developed omni-channel and B2B sales funnels, onboarding major clients including Yamaha, Waffle-Up, and BRAC University.",
                    "Aligned company vision, mission, and revenue projections, transforming the organization into a scalable startup."
                  ]
                },
                {
                  title: "Business Development Specialist",
                  company: "Core Devs Ltd.",
                  period: "January 2023 – January 2024",
                  achievements: [
                    "Designed in-house software for filtering Upwork leads and automating job applications.",
                    "Onboarded $30K USD worth of clients through strategic funnels.",
                    "Upsold existing client base and introduced HubSpot for CRM management.",
                    "Delivered growth strategies for 5+ blockchain projects and provided initial marketing plans."
                  ]
                },
                {
                  title: "Growth Hacker (Freelance Consultant)",
                  company: "HubXpert",
                  period: "September 2022 – December 2022",
                  achievements: [
                    "Onboarded $50K USD worth of clients through a curated two-month growth plan.",
                    "Partnered with HubSpot for firm certification and utilized marketing automation for rapid scaling.",
                    "Created omni-channel marketing funnels and maintained CRM systems."
                  ]
                },
                {
                  title: "Digital Marketing Executive",
                  company: "6sense Technologies",
                  period: "April 2021 – July 2022",
                  achievements: [
                    "Quran Touch: Achieved 1M+ international users through Google Ads, Facebook Ads, and email campaigns. Wrote copy for visuals, homepage, and sales pages.",
                    "Breaking Mars: Launched Bangladesh's first LinkedIn outreach SaaS tool. Managed $10K monthly ad spend, onboarded 1K paying customers, and integrated HubSpot. Partnered with SaaS marketplaces for brand reputation.",
                    "Established the firm's online presence on platforms like GoodFirms and Clutch.",
                    "Onboarded two B2B clients through cold outreach and curated sales funnels."
                  ]
                },
                {
                  title: "Digital Marketing Intern",
                  company: "6sense Technologies",
                  period: "April 2021 – August 2021",
                  achievements: [
                    "Assisted in executing digital marketing campaigns for key clients.",
                    "Hosted webinars with industry experts and focused on organic growth initiatives."
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="border-b border-blue-100 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-blue-800">{job.title}</h3>
                  <p className="text-blue-600 mb-2">{job.company} | {job.period}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Freelance Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-blue-800">Norby SaaS Tool:</span> Managed email marketing using Klaviyo for automation and affiliate programs. Responded to sales queries and integrated CRM workflows.
              </li>
              <li>
                Designed email campaigns, affiliate programs, and lead-generation funnels for multiple freelance clients.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-800">BRAC University</h3>
                  <p className="text-sm text-gray-600">{"Bachelor's Degree in Computer Science, Minor in Economics (Ongoing)"}</p>
                  <p className="text-sm text-gray-600">2017 – *</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Milestone College</h3>
                  <p className="text-sm text-gray-600">2014 – 2016</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Border Guard Public Secondary School</h3>
                  <p className="text-sm text-gray-600">2010 – 2014</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Certifications & Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-blue-800 mb-2">Certifications</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Inbound Certified (HubSpot)</li>
                <li>HubSpot Partner Certification (Firm-Level)</li>
              </ul>
              <h3 className="font-semibold text-blue-800 mb-2">Technical Skills</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Marketing Tools: HubSpot, WordPress, Google Ads, Facebook Ads, and more</li>
                <li>Analytics: CRM Management, Data-Driven Dashboards</li>
                <li>Presentation Skills: Proficient in delivering impactful presentations</li>
                <li>Programming: Java, Python, NumPy, Matplotlib, PyTorch, Pandas, Scikit-learn</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}