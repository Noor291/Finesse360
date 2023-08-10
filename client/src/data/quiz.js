export const quiz = {
    topic: 'Check Your Knowlwdge',
    totalQuestions: 14,
    questions: [
      { 
        question: 'What is the first step in creating a budget?',
        choices: ['Track your spending', 'Set financial goals', 'Create a list of expenses', 'Decide how much money you can save'],
        tag:'Easy',
        topic:'Budgeting',
        type: 'MCQs',
        correctAnswer: 'Track your spending',
        points:1
      },
      {
        question: 'What is the most important rule of budgeting?',
        choices: ['Spend less than you earn', 'Save for a rainy day', 'Invest your money wisely', 'Pay off your debt'],
        tag:'Medium',
        topic:'Budgeting',
        type: 'MCQs',
        correctAnswer: 'Spend less than you earn',
        points:2
      },
      {
        question: 'What is the best way to track your spending?',
        choices: ['Use a budgeting app', 'Write down everything you spend in a notebook', 'Use a spreadsheet', 'All of these'],
        tag:'Hard',
        topic:'Budgeting',
        type: 'MCQs',
        correctAnswer: 'All of these',
        points:3
      },
      {
        question: 'What is the 50/30/20 rule of budgeting?',
        choices: ['50% of your income goes to needs, 30% goes to wants, and 20% goes to savings', '50% of your income goes to wants, 30% goes to needs, and 20% goes to debt', '50% of your income goes to savings, 30% goes to needs, and 20% goes to wants', '50% of your income goes to debt, 30% goes to needs, and 20% goes to savings'],
        tag:'Extra Hard',
        topic:'Budgeting',
        type: 'MCQs',
        correctAnswer: '50% of your income goes to needs, 30% goes to wants, and 20% goes to savings',
        points:4,
      },{
        question: 'What is the best way to save money?',
        choices: ['Open a savings account', 'Set up automatic transfers from your checking account to your savings account', 'Create a savings goal', 'All of these'],
        tag:'Easy',
        topic:'Saving',
        type: 'MCQs',
        correctAnswer: 'All of these',
        points:1,
      },
      {
        question: 'What is the minimum amount of money you should save each month?',
        choices: ['10% of your income', '20% of your income', '30% of your income', '40% of your income'],
        tag:'Medium',
        topic:'Saving',
        type: 'MCQs',
        correctAnswer: '10% of your income',
        points:2,
      },
      {
        question: 'What is the best type of savings account for long-term savings?',
        choices: ['High-yield savings account','Certificate of deposit (CD)', 'Money market account', 'All of the above'],
        tag:'Hard',
        topic:'Saving',
        type: 'MCQs',
        correctAnswer: 'Certificate of deposit (CD)',
        points:3,
      },
      {
        question: 'What is the Rule of 72?',
        choices: ['It tells you how long it takes for your money to double in a savings account with a fixed interest rate.','It tells you how long it takes for your money to triple in a savings account with a fixed interest rate.', 'It tells you how long it takes for your money to quadruple in a savings account with a fixed interest rate.', 'It tells you how long it takes for your money to quintuple in a savings account with a fixed interest rate.'],
        tag:'Extra Hard',
        topic:'Saving',
        type: 'MCQs',
        correctAnswer: 'It tells you how long it takes for your money to double in a savings account with a fixed interest rate.',
        points:4,
      },
      {
        question: 'What is the first step in investing?',
        choices: ['Do your research','Choose an investment', 'Open an investment account', 'Make an investment'],
        tag:'Easy',
        topic:'Investing',
        type: 'MCQs',
        correctAnswer: 'Do your research',
        points:1,
      },
      {
        question: 'What is the most important factor to consider when choosing an investment?',
        choices: ['Your risk tolerance','Your financial goals', 'The time horizon for your investment', 'All of these'],
        tag:'Medium',
        topic:'Investing',
        type: 'MCQs',
        correctAnswer: 'All of these',
        points:2,
      },
      {
        question: 'What is the difference between a stock and a bond?',
        choices: ['A stock is a share of ownership in a company, while a bond is a loan to a company or government.','A stock is a loan to a company, while a bond is a share of ownership in a company or government.','A stock is a share of ownership in a government, while a bond is a loan to a company.','A stock is a loan to a government, while a bond is a share of ownership in a company.'],
        tag:'Hard',
        topic:'Investing',
        type: 'MCQs',
        correctAnswer: 'A stock is a share of ownership in a company, while a bond is a loan to a company or government.',
        points:3,
      },
      {
        question: 'What is the 4% rule?',
        choices: ['It tells you how much money you can withdraw from your retirement savings each year without running out of money.','It tells you how much money you can withdraw from your retirement savings each month without running out of money.','It tells you how much money you can withdraw from your retirement savings over the course of your retirement without running out of money.','It tells you how much money you can withdraw from your retirement savings in the first year of retirement, but you may need to adjust that amount for inflation each subsequent year.'],
        tag:'Extra Hard',
        topic:'Saving',
        type: 'MCQs',
        correctAnswer: 'It tells you how much money you can withdraw from your retirement savings each year without running out of money.',
        points:4,
      },
      {
        question: 'Which of the following is not a good debt management strategy?',
        choices: ["Consolidate your debt into one loan with a lower interest rate.", 'Pay off your debt with the highest interest rate first.', 'Use a debt consolidation loan to pay off all of your debt.', 'Avoid using credit cards.'],
        tag:'Easy',
        topic:'Debt Management',
        type: 'MCQs',
        correctAnswer:'Use a debt consolidation loan to pay off all of your debt.',
        points:1,
      },
      {
        question: 'Which of the following is the best way to negotiate with creditors?',
        choices: ["Be polite and respectful.", 'Be willing to compromise.', 'Be prepared to walk away.', 'All of the above.'],
        tag:'Medium',
        topic:'Debt Management',
        type: 'MCQs',
        correctAnswer: 'All of the above.',
        points:2,
      },
      {
        question: 'Which debt repayment strategy involves paying off the smallest debts first?',
        choices: ['Snowball method', 'Avalanche method', 'Consolidation method', 'Interest-only method'],
        tag:'Hard',
        topic:'Debt Management',
        type: 'MCQs',
        correctAnswer: 'Snowball Method',
        points:3
      },
      {
        question: 'Which of the following is not a good way to negotiate with creditors?',
        choices: ['Snowball method', 'Avalanche method', 'Consolidation method', 'Interest-only method'],
        tag:'Extra Hard',
        topic:'Debt Planning',
        type: 'MCQs',
        correctAnswer: 'Avalanche method',
        points:4,
      },
      {
        question: 'How much money do you need to save for retirement in India?',
        choices: ["It depends on your income, expenses, and life expectancy.", 'It depends on your risk tolerance and investment goals.', 'It depends on the age at which you want to retire.', 'All of these'],
        tag:'Easy',
        topic:'Retirement Planning',
        type: 'MCQs',
        correctAnswer: 'All of these',
        points:1,
      },
      {
        question: 'What is the best way to save for retirement in India?',
        choices: ["Make a budget and stick to it.", 'Invest in a retirement savings plan, such as a Public Provident Fund (PPF) or National Pension System (NPS).', 'Get a part-time job in retirement.', 'All of the above.'],
        tag:'Medium',
        topic:'Retirement Planning',
        type: 'MCQs',
        correctAnswer: 'Invest in a retirement savings plan, such as a Public Provident Fund (PPF) or National Pension System (NPS).',
        points:2,
      },
      {
        question: 'What is the maximum allowable deduction under Section 80CCD(1B) of the Income Tax Act for contributions made to the National Pension System (NPS) for an individual not employed by the Central Government?',
        choices: ['₹50,000', '₹1,00,000', '₹2,00,000', '₹2,50,000'],
        tag:'Hard',
        topic:'Retirement Planning',
        type: 'MCQs',
        correctAnswer: '₹50,000',
        points:3,
      },
      {
        question: 'Which of the following retirement schemes in India offers a guaranteed minimum pension to subscribers and is backed by the government?',
        choices: ["Employees' Provident Fund (EPF)", 'Public Provident Fund (PPF)', 'Atal Pension Yojana (APY)', 'Sukanya Samriddhi Yojana (SSY)'],
        tag:'Extra Hard',
        topic:'Retirement Planning',
        type: 'MCQs',
        correctAnswer: 'Atal Pension Yojana (APY)',
        points:4,
      },
      
    ],
  }