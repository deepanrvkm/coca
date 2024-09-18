'use client'
import { useState } from 'react';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = {
    General: [
      {
        question: 'What are the common features in the Coca POS system?',
        answer:
          'Common features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support.',
      },
      {
        question: 'How does Coca POS help in managing stock?',
        answer: 'Coca POS helps in managing stock by providing real-time stock tracking and inventory management features.',
      },
      {
        question: 'Can the Coca POS application be integrated with other systems?',
        answer:
          'Common features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support.',
      },
      {
        question: 'What is the average cost to purchase and implement a Coca POS?',
        answer: 'Coca POS helps in managing stock by providing real-time stock tracking and inventory management features.',
      },
      {
        question: 'What about customer data security?',
        answer: 'Coca POS helps in managing stock by providing real-time stock tracking and inventory management features.',
      }
    ],
    Transactions: [
      {
        question: 'How to handle failed transactions?',
        answer: 'To handle failed transactions, check your network connection and ensure all payment details are correct before retrying.',
      },
      {
        question: 'What transaction fees are involved?',
        answer: 'Transaction fees depend on the payment gateway and the type of transaction.',
      },
    ],
    Payment: [
      {
        question: 'Can I use multiple payment methods?',
        answer: 'Yes, the Coca POS system supports multiple payment methods, including credit cards, debit cards, and digital wallets.',
      },
      {
        question: 'How secure is the payment process?',
        answer: 'The payment process is secured with encryption and PCI compliance to ensure customer data safety.',
      },
    ],
    Others: [
      {
        question: 'Can the Coca POS be customized?',
        answer: 'Yes, the Coca POS can be customized according to business needs.',
      },
      {
        question: 'What support is available after purchase?',
        answer: 'We provide 24/7 customer support and regular software updates.',
      },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenQuestionIndex(0);
    setSearchQuery('');
  };

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setOpenQuestionIndex(null);
  };

  const filteredQuestions = faqData[activeTab].filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-4 md:px-6 lg:px-8 mb-16">
      <div className="py-16 md:py-24 lg:py-32 bg-[#F3F4F6] rounded-3xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-[#19191C] mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="relative w-full lg:w-[90%] h-[64px]">
                <input
                  type="text"
                  placeholder="Type your question here"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="py-3 px-8 rounded-full bg-white text-[#aeaeae] w-full h-full focus:outline-none border border-[#aeaeae]"
                />
                <button className="absolute right-[6px] top-1/2 transform -translate-y-1/2 bg-[#FF5C00] text-white h-[52px] px-8 rounded-full hover:bg-[#e35500]">
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/4">
              <ul className="space-y-4">
                {Object.keys(faqData).map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => handleTabChange(tab)}
                      className={`w-full lg:w-[180px] py-2 px-4 rounded-full font-semibold ${
                        activeTab === tab ? 'bg-white text-[#FF5C00] border border-[#FF5C00]' : 'bg-transparent text-[#4D4E57]'
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-3/4">
              {filteredQuestions.map((item, index) => (
                <div
                  key={index}
                  className={`py-6 ${index !== 0 ? 'border-t border-[#E5E7EB]' : ''}`}
                >
                  <h3
                    className={`text-[24px] font-medium ${
                      openQuestionIndex === index ? 'text-[#FF5C00]' : 'text-[#19191C]'
                    } flex justify-between items-center cursor-pointer`}
                    onClick={() => toggleQuestion(index)}
                  >
                    {item.question}
                    <span className={`pl-4 ${openQuestionIndex === index ? 'text-[#FF5C00]' : 'text-[#19191C]'}`}>
                      {openQuestionIndex === index ? '-' : '+'}
                    </span>
                  </h3>
                  {openQuestionIndex === index && <p className="text-[#4D4E57] text-xl mt-2 pr-4">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
