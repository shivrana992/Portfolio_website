import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import collegeImg from '@/assets/education/college_img.jpg'
import schoolImg from '@/assets/education/school_img.jpg'
import mastersImg from '@/assets/education/nit.jpg'
import bTechPdf from '@/assets/files/education_pdf/BCA.pdf'
import hsMarkSheetPdf from '@/assets/files/education_pdf/12th.pdf'
import mcaMarkSheetPdf from '@/assets/files/education_pdf/MCA.pdf'
import tenthMarkSheetPdf from '@/assets/files/education_pdf/10th.pdf'

const Education = () => {
  const educationData = [
    {
      school: 'National Institute Of Technology (NIT)',
      location: 'Trichy, Tamil Nadu, India',
      duration: 'July 2024 - Present',
      degree: 'MCA',
      grade: 'Pursuing',
      image: mastersImg,
      resultUrl: mcaMarkSheetPdf,
      documentName: 'MCA.pdf',
      coursework: ['DSA', 'OPPS', 'DAA', 'Computer Networks', 'Web Technologies', 'OS', 'DBMS', 'DCC'],
      description:
        'Currently pursuing MCA with focus on advanced software engineering concepts, scalable application development, and practical problem-solving through projects and coding practice.',
    },
    {
      school: 'Sanskar College Of Professional Studies',
      location: 'Indore, MP, India',
      duration: 'July 2020 - June 2024',
      degree: 'BCA',
      grade: 'CGPA: 8.47',
      image: collegeImg,
      resultUrl: bTechPdf,
      documentName: 'BCA.pdf',
      coursework: ["Software Development", 'DSA', 'OOPs', 'DBMS', 'AI', 'ML', 'OS', 'Networking'],
      description:
        'During my time at BCET, I have built a strong foundation in computer science, focusing on software development, problem-solving, and real-world applications. Engaging in hands-on projects, internships, and coding challenges has helped me enhance my technical and analytical skills.',
    },
    {
      school: 'ST. Francis HR. SEC. School',
      location: 'Pithampur, MP, India',
      duration: 'June 2018 - July 2019',
      degree: 'Higher Secondary (WBSC)',
      grade: 'Percentage: 95%',
      image: schoolImg,
      resultUrl: hsMarkSheetPdf,
      documentName: '12th.pdf',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Physical Education', 'English'],
      description:
        'My higher secondary education laid the foundation for my technical journey, strengthening my analytical thinking and problem-solving abilities. The strong emphasis on mathematics has been instrumental in shaping my passion for software development.',
    },
    {
      school: 'ST. Francis HR. SEC. School',
      location: 'Pithampur, MP, India',
      duration: 'June 2016 - May 2017',
      degree: 'Secondary (10th)',
      grade: 'Percentage: 89.4%',
      image: schoolImg,
      resultUrl: tenthMarkSheetPdf,
      documentName: '10th.pdf',
      subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
      description:
        'My secondary education established my academic fundamentals and built disciplined study habits, curiosity for science, and confidence in analytical learning.',
    },
  ]

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={`${edu.school}-${edu.degree}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
            >
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[350px,1fr]">
                {/* Left Column - Image */}
                <div className="relative h-96 md:h-full">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Award className="w-4 h-4" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2 text-gray-300 mb-6">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </div>

                  {edu.coursework && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.subjects && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span key={subject} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <motion.a
                    href={edu.resultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Result
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  {edu.documentName && (
                    <p className="text-xs text-gray-400 mt-2">Document: {edu.documentName}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Education
