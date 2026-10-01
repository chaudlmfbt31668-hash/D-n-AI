import { WasteCategory, WasteItem, GameQuestion, WasteJourney, HabitItem, WasteLookupItem } from '../types';

export const WASTE_CATEGORIES: WasteCategory[] = [
  {
    id: 'organic',
    name: 'Rác Hữu Cơ',
    subtitle: 'Rác dễ phân hủy sinh học',
    colorName: 'Xanh Lá',
    themeColor: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      badge: 'bg-emerald-100 text-emerald-800',
      light: '#ecfdf5',
      binColor: '#059669',
    },
    binLabel: 'Thùng Xanh Lá',
    description: 'Chất thải có nguồn gốc thực vật hoặc động vật dễ bị vi sinh vật phân hủy tự nhiên trong thời gian ngắn.',
    examples: [
      'Thức ăn thừa, cơm nguội',
      'Vỏ hoa quả, cuống rau củ',
      'Lá cây, cỏ khô sân trường',
      'Bã trà, bã cà phê, vỏ trứng'
    ],
    treatment: 'Ủ phân compost hữu cơ làm đất dinh dưỡng cho cây trồng, hoặc ủ kỵ khí sinh khí sinh học (Biogas).',
    dos: [
      'Để ráo nước tối đa trước khi bỏ vào thùng',
      'Tận dụng bã trà, vỏ chuối bón trực tiếp chậu hoa lớp học',
      'Bỏ riêng không bọc túi nilon ni-lông khó phân hủy'
    ],
    donts: [
      'Không lẫn túi nilon, muỗng nhựa vào thùng hữu cơ',
      'Không bỏ xương to, vỏ sò cứng vì rất khó phân hủy',
      'Không bỏ phân động vật lạ vào rác hữu cơ thông thường'
    ]
  },
  {
    id: 'recyclable',
    name: 'Rác Có Khả Năng Tái Chế',
    subtitle: 'Vật liệu có khả năng tái chế khi có hệ thống thu gom phù hợp',
    colorName: 'Trắng / Xanh Dương',
    themeColor: {
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-800',
      badge: 'bg-sky-100 text-sky-800',
      light: '#f0f9ff',
      binColor: '#0284c7',
    },
    binLabel: 'Thùng Xanh Dương',
    description: 'Chất thải làm từ các vật liệu có khả năng tái chế như giấy, bìa carton, kim loại và một số loại nhựa, chai lọ thủy tinh khi được thu gom theo hệ thống phù hợp.',
    examples: [
      'Chai nhựa (nhựa PET, HDPE sạch)',
      'Lon nước ngọt bằng nhôm, đồ hộp kim loại',
      'Giấy báo, sách vở cũ, bìa carton',
      'Vỏ hộp sữa giấy (đã súc sạch & ép dẹp)'
    ],
    treatment: 'Được thu gom riêng, chuyển về các cơ sở tái chế phù hợp để phân loại, làm sạch và chế biến thành nguyên liệu sản xuất mới.',
    dos: [
      'Súc sơ bằng nước để loại bỏ cặn ngọt, dầu mỡ',
      'Làm dẹp chai nhựa, lon nhôm, hộp giấy để tiết kiệm diện tích',
      'Tập kết giấy kiểm tra, sách vở cũ thành tập gọn gàng'
    ],
    donts: [
      'Không bỏ giấy dính dầu mỡ, giấy than, băng dính',
      'Không để nguyên nước bên trong chai lọ khi vứt',
      'Không để lẫn rác nguy hại vào nhóm rác tái chế'
    ]
  },
  {
    id: 'inorganic',
    name: 'Rác Vô Cơ / Còn Lại',
    subtitle: 'Không thuộc nhóm tái chế hoặc hữu cơ',
    colorName: 'Xám / Cam',
    themeColor: {
      bg: 'bg-stone-50',
      border: 'border-stone-200',
      text: 'text-stone-800',
      badge: 'bg-stone-200 text-stone-700',
      light: '#f5f5f4',
      binColor: '#57534e',
    },
    binLabel: 'Thùng Xám',
    description: 'Phần rác không thuộc nhóm có khả năng tái chế, rác hữu cơ hoặc chất thải nguy hại, phát sinh từ sinh hoạt hàng ngày.',
    examples: [
      'Túi nilon bẩn dính dầu mỡ',
      'Hộp xốp đựng cơm, muỗng nhựa dùng 1 lần',
      'Khẩu trang y tế, giấy ướt, tã lót',
      'Mảnh sành sứ, cao su hỏng, vỏ bánh kẹo tráng bạc'
    ],
    treatment: 'Chuyển về các khu liên hợp xử lý để chôn lấp hợp vệ sinh hoặc thiêu đốt trong các nhà máy hiện đại theo quy định.',
    dos: [
      'Gói gọn gàng tránh phát tán mùi ra môi trường',
      'Bọc kỹ mảnh sành sứ vỡ bằng bìa báo để an toàn cho người thu gom',
      'Giảm thiểu tối đa việc sử dụng đồ dùng một lần'
    ],
    donts: [
      'Không vứt lẫn rác có khả năng tái chế vào đây',
      'Không tự ý đốt rác ngoài trời vì sinh khói bụi độc hại',
      'Không vứt pin hay chất thải nguy hại vào thùng này'
    ]
  },
  {
    id: 'hazardous',
    name: 'Rác Nguy Hại & Cần Thu Gom Riêng',
    subtitle: 'Chứa thành phần độc hại - Cần thu gom riêng',
    colorName: 'Đỏ / Vàng Cảnh Báo',
    themeColor: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      badge: 'bg-amber-100 text-amber-900',
      light: '#fffbeb',
      binColor: '#d97706',
    },
    binLabel: 'Thùng Nguy Hại',
    description: 'Rác thải chứa thành phần độc hại như pin cũ, bóng đèn huỳnh quang, nhiệt kế và thiết bị điện tử hỏng cần thu gom riêng biệt.',
    examples: [
      'Pin đã qua sử dụng (pin tiểu, pin cúc áo, pin đồng hồ)',
      'Bóng đèn huỳnh quang, bóng compact hỏng',
      'Nhiệt kế thủy ngân hỏng (bọc kín trong hộp)',
      'Thiết bị điện tử nhỏ hỏng (chuột máy tính, tai nghe, dây sạc)'
    ],
    treatment: 'TUYỆT ĐỐI KHÔNG TỰ XỬ LÝ TẠI NHÀ. Thu gom riêng biệt và chuyển giao đến các điểm tiếp nhận hoặc cơ sở được cấp phép theo quy định.',
    dos: [
      'Bỏ riêng vào hộp hoặc túi đậy kín tại nhà hoặc lớp học',
      'Mang gửi tại các điểm thu gom pin học đường hoặc trạm tiếp nhận phù hợp',
      'Dán băng dính vào 2 đầu cực của pin cũ để phòng ngừa chập mạch'
    ],
    donts: [
      'Tuyệt đối không tự ý tháo dỡ, đập vỡ hoặc đốt pin và thiết bị điện tử',
      'Không vứt chung vào thùng rác sinh hoạt thông thường',
      'Không chôn lấp hoặc vứt bừa bãi ra môi trường'
    ]
  }
];

export const LOOKUP_ITEMS: WasteItem[] = [
  {
    id: 'chai-nhua-pet',
    name: 'Chai nước lọc, nước ngọt (nhựa PET)',
    category: 'recyclable',
    icon: 'Bottle',
    tags: ['chai nhựa', 'nước suối', 'pet', 'nước ngọt'],
    tips: 'Súc sạch cặn nước, vặn nút lại và bóp bẹp để tiết kiệm diện tích thùng rác.',
    handlingSteps: [
      'Uống hết hoặc đổ cặn chất lỏng bên trong.',
      'Tráng sơ bằng chút nước nếu là nước ngọt có đường.',
      'Mở nắp, bóp bẹp thân chai rồi vặn nhẹ nắp lại.',
      'Bỏ vào Thùng Rác Tái Chế.'
    ],
    commonMistake: 'Vứt cả chai còn đầy nước ngọt làm ướt giấy báo xung quanh, giảm giá trị tái chế.'
  },
  {
    id: 'vo-hop-sua-giay',
    name: 'Vỏ hộp sữa chua uống, sữa tươi (hộp giấy Tetra Pak)',
    category: 'recyclable',
    icon: 'Package',
    tags: ['hộp sữa', 'sữa học đường', 'tetra pak', 'sữa tươi'],
    tips: 'Hộp sữa gồm nhiều lớp giấy, nhôm và nhựa. Có thể tái chế thành tấm lợp sinh thái nếu được làm sạch!',
    handlingSteps: [
      'Cắm ống hút uống cạn hết sữa.',
      'Gỡ 4 góc tai hộp, gấp dẹp hoàn toàn.',
      'Nếu có điều kiện, rạch góc súc sạch và phơi khô.',
      'Bỏ vào Thùng Rác Tái Chế.'
    ],
    commonMistake: 'Bỏ hộp còn sữa thừa gây bốc mùi hôi thối và thu hút kiến gián.'
  },
  {
    id: 'vo-chuoi-cuong-tao',
    name: 'Vỏ chuối, cuống hoa quả, lõi bắp',
    category: 'organic',
    icon: 'Apple',
    tags: ['vỏ chuối', 'trái cây', 'hoa quả', 'hữu cơ', 'thực phẩm'],
    tips: 'Rất giàu kali và chất hữu cơ, là nguồn làm phân bón compost tuyệt vời.',
    handlingSteps: [
      'Tách riêng, không bỏ lẫn màng bọc nilon hay muỗng nĩa nhựa.',
      'Có thể cắt nhỏ để phân hủy nhanh hơn.',
      'Bỏ vào Thùng Rác Hữu Cơ hoặc chôn vào gốc cây cảnh.'
    ]
  },
  {
    id: 'pin-cu',
    name: 'Pin tiểu AA, AAA, pin đồng hồ',
    category: 'hazardous',
    icon: 'Zap',
    tags: ['pin', 'pin tiểu', 'pin điện thoại', 'nguy hại', 'kim loại nặng'],
    tips: 'Một viên pin chứa thủy ngân, chì, kẽm có thể gây ô nhiễm 500 lít nước ngầm!',
    handlingSteps: [
      'Dùng băng dính dán bịt hai đầu cực của pin để tránh đoản mạch.',
      'Gom các viên pin vào 1 chiếc lọ thủy tinh hoặc hộp giấy riêng.',
      'Mang tới Điểm thu gom pin cũ của Trường THPT hoặc siêu thị Co.opmart/VinMart.'
    ],
    commonMistake: 'Ném lẫn vào thùng rác thông thường hoặc tự ý đốt cháy.'
  },
  {
    id: 'hop-xop-com',
    name: 'Hộp xốp đựng cơm dính dầu mỡ',
    category: 'inorganic',
    icon: 'Utensils',
    tags: ['hộp xốp', 'cơm hộp', 'đồ ăn nhanh', 'xốp'],
    tips: 'Xốp dính dầu mỡ rất khó làm sạch và không thể tái chế thông thường.',
    handlingSteps: [
      'Gạt hết thức ăn thừa vào thùng Rác Hữu Cơ.',
      'Gập gọn hộp xốp lại.',
      'Bỏ vào Thùng Rác Vô Cơ / Còn Lại.'
    ],
    commonMistake: 'Bỏ cả thức ăn thừa trong hộp xốp vào thùng rác tái chế.'
  },
  {
    id: 'khau-trang-y-te',
    name: 'Khẩu trang y tế dùng 1 lần',
    category: 'inorganic',
    icon: 'ShieldCheck',
    tags: ['khẩu trang', 'y tế', 'khẩu trang 4 lớp'],
    tips: 'Khẩu trang chứa sợi polymer tổng hợp và có nguy cơ lây nhiễm vi khuẩn sinh hoạt.',
    handlingSteps: [
      'Cầm vào quai tháo khẩu trang, không chạm vào mặt ngoài.',
      'Cắt hoặc đứt quai khẩu trang (tránh gây vướng động vật hoang dã).',
      'Gấp đôi lại và bỏ ngay vào Thùng Rác Vô Cơ.'
    ]
  },
  {
    id: 'lon-nhom-nuoc-ngot',
    name: 'Lon nhôm nước ngọt, nước tăng lực',
    category: 'recyclable',
    icon: 'Can',
    tags: ['lon nhôm', 'nước có ga', 'coca', 'pepsi', 'kim loại'],
    tips: 'Nhôm có thể tái chế vô hạn lần mà không giảm chất lượng, tiết kiệm 95% năng lượng so với sản xuất nhôm mới!',
    handlingSteps: [
      'Đổ hết chất lỏng dư thừa.',
      'Dẫm hoặc bóp dẹp thân lon để tiết kiệm thể tích.',
      'Bỏ vào Thùng Rác Tái Chế.'
    ]
  },
  {
    id: 'giay-nhap-bai-thi',
    name: 'Giấy kiểm tra, sách vở cũ, giấy A4',
    category: 'recyclable',
    icon: 'FileText',
    tags: ['giấy', 'vở cũ', 'sách giáo khoa', 'tài liệu', 'giấy thi'],
    tips: 'Tái chế 1 tấn giấy giúp cứu sống 17 cây xanh và tiết kiệm 26.000 lít nước ngọt.',
    handlingSteps: [
      'Gỡ bỏ kẹp ghim sắt lớn hoặc bìa nhựa dẻo bọc ngoài.',
      'Giữ giấy phẳng hoặc gấp gọn, không vò nát thành khối tròn.',
      'Bỏ vào Thùng Rác Tái Chế hoặc đóng thùng gom giấy vụn học đường.'
    ]
  },
  {
    id: 'ly-tra-sua-nhua',
    name: 'Ly trà sữa bằng nhựa PP (đã uống hết)',
    category: 'recyclable',
    icon: 'Coffee',
    tags: ['trà sữa', 'ly nhựa', 'nhựa pp', 'cốc nhựa'],
    tips: 'Ly nhựa PP tái chế tốt nếu được rửa sạch trân châu và cặn trà đường!',
    handlingSteps: [
      'Đổ bỏ hết đá lạnh và trân châu thừa vào thùng hữu cơ.',
      'Tráng nước sạch lòng ly.',
      'Gỡ bỏ màng ép nilon bẩn trên miệng ly (bỏ vào rác vô cơ).',
      'Xếp chồng các thân ly sạch vào Thùng Rác Tái Chế.'
    ]
  },
  {
    id: 'vo-bim-bim',
    name: 'Vỏ túi bánh snack, bim bim, kẹo',
    category: 'inorganic',
    icon: 'Layers',
    tags: ['bim bim', 'snack', 'vỏ bánh kẹo', 'màng mạ kim loại'],
    tips: 'Bao bì snack là màng đa lớp (nhựa kết hợp nhôm mạ mỏng), hiện chưa có công nghệ tái chế phổ thông tại Việt Nam.',
    handlingSteps: [
      'Ăn hết vụn bánh bên trong.',
      'Gấp nhỏ lại cho gọn.',
      'Bỏ vào Thùng Rác Vô Cơ / Còn Lại.'
    ]
  },
  {
    id: 'but-bi-het-muc',
    name: 'Bút bi, bút highlight hết mực',
    category: 'inorganic',
    icon: 'PenTool',
    tags: ['bút bi', 'bút dạ', 'học tập', 'viết'],
    tips: 'Cấu tạo từ nhiều loại nhựa kỹ thuật khác nhau gắn kết với đầu kim loại có dính mực tồn dư.',
    handlingSteps: [
      'Bỏ vào Thùng Rác Vô Cơ.',
      'Khuyến khích sử dụng bút bi có thể thay ruột mực để giảm rác thải nhựa học đường.'
    ]
  },
  {
    id: 'ba-tra-ca-phe',
    name: 'Bã trà, bã cà phê pha phin',
    category: 'organic',
    icon: 'Feather',
    tags: ['bã cà phê', 'bã trà', 'xác trà', 'phân bón'],
    tips: 'Bã cà phê khử mùi tủ lạnh cực tốt và là chất xua đuổi ốc sên tự nhiên cho cây cảnh.',
    handlingSteps: [
      'Gạn ráo nước thừa.',
      'Bỏ vào Thùng Rác Hữu Cơ hoặc bón trực tiếp quanh gốc cây trong sân trường.'
    ]
  },
  {
    id: 'bong-den-huynh-quang',
    name: 'Bóng đèn tuýp, bóng đèn compact hỏng',
    category: 'hazardous',
    icon: 'Lightbulb',
    tags: ['bóng đèn', 'thủy ngân', 'nguy hại', 'điện'],
    tips: 'Chứa hơi thủy ngân độc hại. Tuyệt đối không làm vỡ bóng!',
    handlingSteps: [
      'Bọc nguyên vẹn bóng đèn trong giấy báo hoặc vỏ hộp carton cũ.',
      'Không bóp vỡ.',
      'Chuyển đến khu vực thu gom rác nguy hại của trường hoặc trạm môi trường.'
    ]
  },
  {
    id: 'khan-giay-uot',
    name: 'Khăn giấy ướt, giấy ăn đã lau dầu mỡ',
    category: 'inorganic',
    icon: 'FileQuestion',
    tags: ['khăn giấy', 'giấy ướt', 'giấy ăn', 'vô cơ'],
    tips: 'Khăn giấy ướt làm từ sợi nhân tạo không tan trong nước và chứa hóa chất tạo hương, không thể ủ phân hữu cơ.',
    handlingSteps: [
      'Không vứt vào bồn cầu vì gây tắc đường ống.',
      'Bỏ vào Thùng Rác Vô Cơ / Còn Lại.'
    ]
  },
  {
    id: 'manh-sanh-su-vo',
    name: 'Mảnh bát đĩa, ly sành sứ bị vỡ',
    category: 'inorganic',
    icon: 'AlertTriangle',
    tags: ['bát vỡ', 'sành sứ', 'thủy tinh vỡ', 'vô cơ'],
    tips: 'Đồ gốm sứ đã nung ở nhiệt độ cao không thể tái chế như chai lọ thủy tinh soda-vôi.',
    handlingSteps: [
      'Gói kỹ nhiều lớp bằng giấy báo hoặc vỏ hộp bìa carton.',
      'Dán băng dính và ghi chú "CẢNH BÁO MẢNH VỠ" bên ngoài.',
      'Bỏ vào Thùng Rác Vô Cơ để bảo vệ an toàn cho công nhân vệ sinh.'
    ]
  }
];

export const GAME_QUESTIONS: GameQuestion[] = [
  {
    id: 'q1',
    name: 'Chai nhựa nước khoáng rỗng',
    emoji: '🧴',
    category: 'recyclable',
    explanation: 'Chính xác! Chai nhựa sạch (nhựa PET) thuộc nhóm Rác tái chế. Bạn nên súc sạch và bóp bẹp để tiết kiệm diện tích thùng rác.',
    tip: 'Mẹo: Nhựa PET được ký hiệu số 1 trong tam giác mũi tên dưới đáy chai.'
  },
  {
    id: 'q2',
    name: 'Vỏ chuối và vỏ hoa quả',
    emoji: '🍌',
    category: 'organic',
    explanation: 'Rất chuẩn! Vỏ chuối là rác hữu cơ dễ phân hủy sinh học, có thể ủ thành phân compost giàu dinh dưỡng cho cây trồng.',
    tip: 'Mẹo: Để ráo nước trước khi bỏ vào thùng rác hữu cơ để tránh bốc mùi hôi.'
  },
  {
    id: 'q3',
    name: 'Hộp bìa carton đóng gói',
    emoji: '📦',
    category: 'recyclable',
    explanation: 'Đúng rồi! Hộp bìa carton là vật liệu tái chế có giá trị cao, được đưa về nhà máy để nghiền thành bột giấy tái sinh.',
    tip: 'Mẹo: Tháo băng dính và gấp dẹp hộp trước khi cho vào thùng tái chế.'
  },
  {
    id: 'q4',
    name: 'Lon kim loại nước giải khát',
    emoji: '🥫',
    category: 'recyclable',
    explanation: 'Chính xác! Lon nhôm kim loại có thể tái chế vô hạn lần mà không giảm chất lượng, tiết kiệm 95% năng lượng sản xuất.',
    tip: 'Mẹo: Dẫm hoặc bóp dẹp thân lon để tiết kiệm thể tích chứa.'
  },
  {
    id: 'q5',
    name: 'Pin đã sử dụng (pin tiểu AA/AAA)',
    emoji: '🔋',
    category: 'hazardous',
    explanation: 'Rất chính xác! Pin chứa các thành phần độc hại, cần được thu gom riêng và chuyển giao đến điểm tiếp nhận phù hợp. Tuyệt đối không tự ý xử lý tại nhà.',
    tip: 'Lưu ý an toàn: Không vứt pin chung với rác sinh hoạt và không tự ý tháo dỡ, đốt hay đập vỡ.'
  },
  {
    id: 'q6',
    name: 'Thức ăn thừa và cơm nguội căn tin',
    emoji: '🍚',
    category: 'organic',
    explanation: 'Đúng 100%! Thức ăn thừa thuộc nhóm Rác hữu cơ, có thể chế biến thành thức ăn chăn nuôi hoặc ủ vi sinh làm phân bón.',
    tip: 'Mẹo: Không để lẫn túi nilon hay muỗng nhựa vào khay thức ăn thừa.'
  },
  {
    id: 'q7',
    name: 'Tập giấy kiểm tra và sách báo cũ',
    emoji: '📝',
    category: 'recyclable',
    explanation: 'Chính xác! Giấy viết, sách vở cũ là rác tái chế giúp giảm lượng cây xanh bị chặt hạ để sản xuất giấy mới.',
    tip: 'Mẹo: Gỡ bỏ bìa bọc nilon dẻo và giữ giấy khô ráo trước khi gom.'
  },
  {
    id: 'q8',
    name: 'Chai lọ thủy tinh nguyên vẹn',
    emoji: '🍾',
    category: 'recyclable',
    explanation: 'Rất chuẩn! Thủy tinh nguyên vẹn có khả năng tái sử dụng hoặc tái chế khi được thu gom theo hệ thống phù hợp.',
    tip: 'Mẹo: Nếu chai thủy tinh bị vỡ, cần gói nhiều lớp giấy báo ghi chú cẩn thận để tránh gây thương tích.'
  },
  {
    id: 'q9',
    name: 'Vỏ hộp giấy đựng sữa học đường (Tetra Pak)',
    emoji: '🧃',
    category: 'recyclable',
    explanation: 'Chính xác! Hộp sữa giấy sau khi uống hết, súc sơ và bóp bẹp có thể tái chế thành tấm lợp sinh thái hoặc giấy công nghiệp.',
    tip: 'Mẹo: Cắm ống hút uống cạn, mở 4 tai hộp và ép dẹp hoàn toàn.'
  },
  {
    id: 'q10',
    name: 'Rau củ hỏng và cuống rau úa',
    emoji: '🥦',
    category: 'organic',
    explanation: 'Đúng rồi! Rau củ hỏng là chất hữu cơ dễ phân hủy sinh học tự nhiên, rất thích hợp cho quá trình ủ mùn sinh học.',
    tip: 'Mẹo: Cắt nhỏ rau củ giúp quá trình phân hủy compost diễn ra nhanh hơn.'
  },
  {
    id: 'q11',
    name: 'Khăn giấy ướt / Khăn giấy ăn đã lau dầu mỡ',
    emoji: '🧻',
    category: 'inorganic',
    explanation: 'Chính xác! Khăn giấy đã lau dầu mỡ hoặc khăn giấy ướt chứa sợi nhân tạo không thể tái chế, thuộc nhóm Rác còn lại.',
    tip: 'Lưu ý: Không vứt khăn giấy ướt vào bồn cầu vì chúng không tan trong nước và gây nghẹt cống.'
  },
  {
    id: 'q12',
    name: 'Bao bì sạch phù hợp hệ thống thu gom (nhựa PE/PP)',
    emoji: '🛍️',
    category: 'recyclable',
    explanation: 'Rất đúng! Các loại túi và bao bì nhựa sạch, khô ráo phù hợp hệ thống thu gom sẽ được nấu chảy thành hạt nhựa tái chế.',
    tip: 'Mẹo: Chỉ tái chế bao bì sạch không dính thức ăn hoặc dầu mỡ.'
  },
  {
    id: 'q13',
    name: 'Hộp xốp đựng đồ ăn dính dầu mỡ',
    emoji: '🍱',
    category: 'inorganic',
    explanation: 'Chính xác! Hộp xốp làm từ nhựa xốp PS dính dầu mỡ không thể tái chế kinh tế, thuộc nhóm Rác còn lại để chuyển đi chôn lấp hoặc đốt rác phát điện.',
    tip: 'Thói quen xanh: Hãy mang theo hộp cơm inox cá nhân khi mua đồ ăn sáng quanh trường.'
  },
  {
    id: 'q14',
    name: 'Bóng đèn huỳnh quang hỏng',
    emoji: '💡',
    category: 'hazardous',
    explanation: 'Chuẩn xác! Bóng đèn huỳnh quang chứa bột huỳnh quang và hơi thủy ngân độc hại, cần gom riêng gửi điểm tiếp nhận chuyên trách.',
    tip: 'Cảnh báo an toàn: Bọc nguyên vẹn bóng đèn trong bìa carton, tuyệt đối không bóp vỡ.'
  },
  {
    id: 'q15',
    name: 'Vỏ túi bánh snack / bim bim tráng bạc',
    emoji: '🍿',
    category: 'inorganic',
    explanation: 'Đúng 100%! Vỏ túi bánh snack là màng ghép đa lớp phức hợp (nhựa kết hợp mạ kim loại), hiện chưa có công nghệ tái chế thông thường, thuộc Rác còn lại.',
    tip: 'Thói quen xanh: Hạn chế đồ ăn đóng gói màng phức hợp một lần.'
  },
  {
    id: 'q16',
    name: 'Bã trà và bã cà phê',
    emoji: '☕',
    category: 'organic',
    explanation: 'Chính xác! Bã trà, bã cà phê là rác hữu cơ giàu khoáng chất, bón trực tiếp cho cây cảnh hoặc ủ đất rất tốt.',
    tip: 'Mẹo: Bã cà phê phơi khô còn có công dụng khử mùi tủ lạnh hiệu quả.'
  },
  {
    id: 'q17',
    name: 'Khẩu trang y tế dùng 1 lần',
    emoji: '😷',
    category: 'inorganic',
    explanation: 'Rất chuẩn! Khẩu trang y tế chứa sợi polymer nhân tạo khó phân hủy và có yếu tố vệ sinh phòng dịch, thuộc nhóm Rác còn lại.',
    tip: 'Mẹo: Cắt đứt quai khẩu trang trước khi vứt để không làm mắc kẹt các loài chim hoặc động vật nhỏ.'
  },
  {
    id: 'q18',
    name: 'Thiết bị điện tử hỏng (chuột máy tính, tai nghe)',
    emoji: '🖱️',
    category: 'hazardous',
    explanation: 'Chính xác! Thiết bị điện tử hỏng chứa các thành phần cần xử lý đặc biệt, cần thu gom riêng và chuyển đến các điểm tiếp nhận phù hợp.',
    tip: 'Lưu ý an toàn: Không tự ý tháo dỡ linh kiện và không vứt vào thùng rác gia đình thông thường.'
  }
];

export const WASTE_JOURNEYS: WasteJourney[] = [
  {
    id: 'plastic-bottle',
    material: 'Chai nhựa PET',
    summary: 'Từ chai nước ngọt bỏ đi đến chiếc áo phông thời trang tái sinh.',
    impact: 'Tái chế 1 tấn nhựa PET tiết kiệm 3,8 thùng dầu mỏ và giảm 1,5 tấn CO₂ phát thải vào khí quyển.',
    steps: [
      {
        step: 1,
        title: 'Bỏ đúng thùng tái chế',
        description: 'Học sinh súc sạch chai, bóp bẹp và bỏ vào thùng rác tái chế tại trường hoặc gia đình.',
        fact: 'Bóp bẹp giúp xe rác chở được gấp 3 lần lượng vỏ chai trong một chuyến đi.',
        iconName: 'Trash2'
      },
      {
        step: 2,
        title: 'Phân loại quang học',
        description: 'Xe thu gom đưa chai về nhà máy. Máy quét hồng ngoại tách nhựa PET trong suốt khỏi các loại nhựa khác.',
        fact: 'Độ tinh khiết sau phân loại máy móc đạt hơn 98%.',
        iconName: 'Sparkles'
      },
      {
        step: 3,
        title: 'Nghiền và khử trùng nước nóng',
        description: 'Chai được cắt nhỏ thành vảy nhựa (flakes), ngâm rửa bằng dung dịch kiềm nóng để tẩy sạch keo nhãn và tiệt trùng.',
        fact: 'Nhiệt độ rửa đạt 85°C giúp diệt sạch 100% vi khuẩn.',
        iconName: 'Flame'
      },
      {
        step: 4,
        title: 'Kéo sợi & Dệt vải tái sinh',
        description: 'Vảy nhựa nấu chảy ở 260°C, ép qua mắt lưới siêu nhỏ tạo thành sợi Polyester tái chế (rPET).',
        fact: 'Cần khoảng 5 chai nhựa PET 500ml để dệt nên một chiếc áo phông thể thao hoàn chỉnh!',
        iconName: 'Shirt'
      }
    ]
  },
  {
    id: 'aluminum-can',
    material: 'Lon Nhôm',
    summary: 'Nhà vô địch tái chế vô hạn với vòng đời tuần hoàn khép kín siêu nhanh.',
    impact: 'Tái chế nhôm tiết kiệm 95% năng lượng so với việc tinh chế quặng Bauxit ban đầu.',
    steps: [
      {
        step: 1,
        title: 'Thu gom & Ép kiện',
        description: 'Lon nhôm được thu gom tại trường học, ép thành từng khối hộp vuông lớn nặng hàng trăm kg.',
        fact: 'Một kiện nhôm tiêu chuẩn có thể chứa tới 4.000 lon rỗng.',
        iconName: 'Package'
      },
      {
        step: 2,
        title: 'Nấu chảy ở nhiệt độ 660°C',
        description: 'Các lon nhôm được đưa vào lò nung chuyên dụng, lớp sơn phủ bên ngoài bay hơi và nhôm lỏng tinh khiết đọng lại.',
        fact: 'Nhôm không hề mất đi bất kỳ đặc tính vật lý nào sau khi nấu chảy lại.',
        iconName: 'Flame'
      },
      {
        step: 3,
        title: 'Đúc thỏi & Cán mỏng',
        description: 'Nhôm lỏng đúc thành thỏi lớn dài 10 mét rồi đưa qua máy cán áp lực cao thành các cuộn nhôm mỏng chỉ 0,1mm.',
        fact: 'Một cuộn nhôm tái chế có thể dập được hàng triệu thân lon mới.',
        iconName: 'Layers'
      },
      {
        step: 4,
        title: 'Trở lại kệ hàng sau 60 ngày',
        description: 'Lon mới được tạo hình, in ấn và chiết rót nước giải khát, quay lại tay người tiêu dùng.',
        fact: 'Chiếc lon bạn uống hôm nay có thể đã từng tồn tại từ 20 năm trước qua nhiều vòng tái chế!',
        iconName: 'RotateCw'
      }
    ]
  },
  {
    id: 'organic-compost',
    material: 'Rác Hữu Cơ & Thức Ăn',
    summary: 'Tuần hoàn sinh thái: Từ thức ăn thừa biến thành phân compost nuôi dưỡng mầm non.',
    impact: 'Giảm khí nhà kính Methane (CH₄) độc hại sinh ra khi rác hữu cơ bị chôn lấp thiếu khí.',
    steps: [
      {
        step: 1,
        title: 'Thu gom riêng ráo nước',
        description: 'Vỏ rau củ, thức ăn thừa căn tin trường học được gom vào thùng rác xanh lá, tách biệt hoàn toàn túi nilon.',
        fact: 'Rác hữu cơ chiếm tới 50% - 65% tổng khối lượng rác sinh hoạt tại Việt Nam.',
        iconName: 'Trash2'
      },
      {
        step: 2,
        title: 'Bổ sung vi sinh bản địa (EM)',
        description: 'Rác hữu cơ được băm nhỏ và phối trộn với men vi sinh ủ phân cùng mùn cưa hoặc trấu khô.',
        fact: 'Nhiệt độ đống ủ tự nhiên tăng lên 55-65°C, tiêu diệt mầm bệnh và hạt cỏ dại.',
        iconName: 'Activity'
      },
      {
        step: 3,
        title: 'Đảo trộn và lên men hiếu khí',
        description: 'Sau 30 - 45 ngày phân hủy tự nhiên với oxy, chất hữu cơ chuyển hóa thành mùn đen tơi xốp, thơm mùi đất rừng.',
        fact: 'Không hề có mùi hôi nếu được ủ đúng tỷ lệ Carbon/Nitrogen.',
        iconName: 'Wind'
      },
      {
        step: 4,
        title: 'Bón vườn sinh học học đường',
        description: 'Phân hữu cơ mùn compost được bón cho vườn rau câu lạc bộ sinh học hoặc các bồn cây xanh sân trường.',
        fact: 'Giúp đất giữ ẩm tốt hơn 30% và hoàn toàn không dùng phân bón hóa học độc hại.',
        iconName: 'Sprout'
      }
    ]
  }
];

export const GREEN_HABITS: HabitItem[] = [
  {
    id: 'h1',
    title: 'Mang bình nước cá nhân đến trường',
    description: 'Nói không với việc mua 1-2 chai nước nhựa đóng chai mỗi ngày.',
    category: 'refuse',
    points: 15,
    schoolContext: 'Cứ 1 học sinh mang bình nước giúp giảm phát thải ~300 chai nhựa/năm học.'
  },
  {
    id: 'h2',
    title: 'Từ chối túi nilon khi mua đồ ăn sáng',
    description: 'Chủ động nói: "Cô ơi cho con không lấy túi nilon và hộp xốp ạ!" khi mua bánh mì/xôi.',
    category: 'refuse',
    points: 10,
    schoolContext: 'Một túi nilon dùng 5 phút nhưng tồn tại tới 400 năm ngoài tự nhiên.'
  },
  {
    id: 'h3',
    title: 'Tận dụng 2 mặt giấy nháp',
    description: 'Dùng hết các trang giấy còn trống của tập vở năm học trước làm giấy giải bài tập Toán, Lý, Hóa.',
    category: 'reduce',
    points: 10,
    schoolContext: 'Thói quen nhỏ này giúp lớp bạn tiết kiệm hàng chục cuốn vở mỗi học kỳ.'
  },
  {
    id: 'h4',
    title: 'Thu gom pin cũ vào hộp chuyên biệt',
    description: 'Không ném pin chuột máy tính, pin đồng hồ vào thùng rác gia đình hay sân trường.',
    category: 'recycle',
    points: 20,
    schoolContext: 'Đem nộp tại các ngày hội "Đổi pin lấy cây" hoặc điểm thu gom xanh của đoàn trường.'
  },
  {
    id: 'h5',
    title: 'Súc sạch & bóp bẹp vỏ hộp sữa học đường',
    description: 'Uống cạn, mở tai hộp, bóp dẹp trước khi bỏ vào thùng rác tái chế căn tin.',
    category: 'recycle',
    points: 15,
    schoolContext: 'Giúp không gian thùng rác trường gọn gàng và không bị bốc mùi chua hôi.'
  },
  {
    id: 'h6',
    title: 'Tái chế chai nhựa làm chậu cây treo tường',
    description: 'Khoét lỗ thân chai nhựa, đục lỗ thoát nước và trồng cây sen đá, trầu bà trang trí lớp học.',
    category: 'repurpose',
    points: 15,
    schoolContext: 'Góc học tập thêm sinh động và tràn ngập sinh khí tích cực.'
  }
];

export const PROJECT_INFO = {
  title: 'GreenSort - Nền tảng Giáo dục Môi trường Học đường',
  schoolYear: 'Năm học 2024 - 2025',
  subject: 'Dự án Tin học Lớp 10 · Vibe Coding & Công nghệ vì Cộng đồng',
  targetAudience: 'Học sinh THPT toàn quốc (Đặc biệt khối 10 bắt đầu môn Hoạt động Trải nghiệm & Hướng nghiệp)',
  quote: '“Mỗi món rác được đặt đúng vị trí là một mầm xanh gửi lại tương lai.”',
  authorTeam: 'Nhóm học sinh Yêu Môi Trường - Lớp 10 THPT',
  safetyCommitment: 'Cam kết an toàn: Dự án chỉ cung cấp thông tin giáo dục môi trường an toàn. Không hướng dẫn tháo dỡ thiết bị, không hướng dẫn xử lý hóa chất hoặc chất nguy hại tại nhà. Mọi rác thải nguy hại (pin, rác điện tử, bóng đèn) luôn được khuyến khích thu gom riêng và chuyển giao cho các cơ sở hoặc điểm tiếp nhận phù hợp theo quy định.',
  highlights: [
    { label: 'Quy chuẩn cập nhật', value: 'Luật BVMT 2020' },
    { label: 'Cơ sở dữ liệu', value: '30+ vật dụng trường học' },
    { label: 'Mini Game', value: '10 thử thách tương tác' },
    { label: 'Điểm thói quen', value: 'Lưu trữ cục bộ LocalStorage' }
  ]
};

export const WASTE_LOOKUP_DATABASE: WasteLookupItem[] = [
  {
    id: 'chai-nhua',
    name: 'Chai nhựa',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '🧴',
    description: 'Chai nước khoáng, nước ngọt bằng nhựa PET hoặc HDPE.',
    treatment: 'Thu gom theo hệ thống phù hợp.',
    note: 'Khả năng tái chế phụ thuộc vào loại vật liệu và hệ thống thu gom tại địa phương. Nên súc sạch và bóp dẹp trước khi bỏ thùng.',
    tags: ['chai nhua', 'chai nuoc', 'pet', 'hdpe', 'nuoc suoi', 'nhua']
  },
  {
    id: 'vo-chuoi',
    name: 'Vỏ chuối',
    category: 'organic',
    categoryLabel: 'Hữu cơ',
    emoji: '🍌',
    description: 'Vỏ quả chuối sau khi ăn, giàu kali và chất hữu cơ tự nhiên.',
    treatment: 'Có thể được xử lý bằng phương pháp phù hợp.',
    note: 'Để ráo nước trước khi bỏ vào thùng hữu cơ để hạn chế phát sinh mùi hôi và nước rỉ rác.',
    tags: ['vo chuoi', 'chuoi', 'vo trai cay', 'hoa qua', 'huu co']
  },
  {
    id: 'pin',
    name: 'Pin',
    category: 'hazardous',
    categoryLabel: 'Rác nguy hại',
    emoji: '🔋',
    description: 'Pin tiểu AA, AAA, pin cúc áo, pin đồng hồ đã qua sử dụng chứa kim loại nặng độc hại.',
    treatment: 'Thu gom riêng và đưa đến điểm tiếp nhận phù hợp.',
    note: 'Không tự ý tháo dỡ hoặc xử lý pin tại nhà. Dán băng dính 2 đầu cực và mang nộp tại các điểm thu gom pin chuyên dụng.',
    tags: ['pin', 'pin tieu', 'pin cu', 'battery', 'nguy hai']
  },
  {
    id: 'lon-kim-loai',
    name: 'Lon',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '🥫',
    description: 'Lon nhôm hoặc lon sắt mạ thiếc đựng nước ngọt, nước giải khát, đồ hộp.',
    treatment: 'Thu gom theo hệ thống thu gom và tái chế kim loại.',
    note: 'Đổ hết cặn nước ngọt và bóp dẹp thân lon để tiết kiệm thể tích thùng chứa.',
    tags: ['lon', 'lon nhom', 'lon kim loai', 'coca', 'pepsi', 'nuoc ngot', 'do hop']
  },
  {
    id: 'giay',
    name: 'Giấy',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '📄',
    description: 'Giấy in A4, giấy kiểm tra, sách vở cũ, báo chí học đường.',
    treatment: 'Thu gom riêng và chuyển giao cho quy trình tái chế bột giấy.',
    note: 'Giữ giấy khô ráo, không để lẫn giấy thấm dầu mỡ hoặc giấy dính keo bẩn.',
    tags: ['giay', 'sach vo', 'vo cu', 'giay a4', 'giay thi', 'bao']
  },
  {
    id: 'hop-carton',
    name: 'Hộp carton',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '📦',
    description: 'Bìa carton gợn sóng từ các thùng đóng gói bưu phẩm, đồ gia dụng.',
    treatment: 'Thu gom theo hệ thống tái chế giấy và bìa carton.',
    note: 'Tháo bỏ băng dính dán trên bề mặt và gấp dẹp thùng trước khi tập kết.',
    tags: ['hop carton', 'bia carton', 'thung giay', 'hop giay', 'carton']
  },
  {
    id: 'thuc-an-thua',
    name: 'Thức ăn thừa',
    category: 'organic',
    categoryLabel: 'Hữu cơ',
    emoji: '🍚',
    description: 'Cơm thừa, rau củ ăn dở, bã thực phẩm sau bữa ăn tại căn tin hoặc gia đình.',
    treatment: 'Xử lý bằng phương pháp ủ phân compost hoặc chế biến thức ăn chăn nuôi phù hợp.',
    note: 'Không để lẫn bao bì nilon, tăm tre hay muỗng nĩa nhựa vào phần thức ăn thừa.',
    tags: ['thuc an thua', 'com nguoi', 'do an', 'huu co']
  },
  {
    id: 'rau-cu-hong',
    name: 'Rau củ hỏng',
    category: 'organic',
    categoryLabel: 'Hữu cơ',
    emoji: '🥦',
    description: 'Các loại rau úa, củ quả bị dập hỏng phát sinh trong quá trình sơ chế thực phẩm.',
    treatment: 'Xử lý bằng phương pháp ủ mùn hữu cơ sinh học.',
    note: 'Có thể cắt nhỏ để tăng tốc độ phân hủy tự nhiên của vi sinh vật.',
    tags: ['rau cu hong', 'rau ua', 'cu qua', 'rau', 'huu co']
  },
  {
    id: 'chai-thuy-tinh',
    name: 'Chai thủy tinh',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '🍾',
    description: 'Chai lọ thủy tinh đựng đồ uống, gia vị còn nguyên vẹn.',
    treatment: 'Thu gom làm sạch tái sử dụng hoặc đưa vào lò nấu chảy tái sinh.',
    note: 'Nếu chai bị vỡ, cần gói cẩn thận bằng bìa báo cứng để đảm bảo an toàn cho nhân viên thu gom.',
    tags: ['chai thuy tinh', 'thuy tinh', 'lo thuy tinh', 'hu thuy tinh']
  },
  {
    id: 'hop-sua-giay',
    name: 'Vỏ hộp sữa giấy',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '🧃',
    description: 'Vỏ hộp sữa học đường đa lớp (Tetra Pak) gồm giấy, nhôm và nhựa.',
    treatment: 'Thu gom theo chương trình tái chế vỏ hộp sữa chuyên biệt để tách bột giấy và nhôm.',
    note: 'Cần hút cạn sữa, mở 4 tai hộp và gấp dẹp hoàn toàn.',
    tags: ['hop sua', 'vo hop sua', 'tetra pak', 'sua hoc duong', 'sua tuoi']
  },
  {
    id: 'khan-giay-da-dung',
    name: 'Khăn giấy đã sử dụng',
    category: 'inorganic',
    categoryLabel: 'Rác còn lại',
    emoji: '🧻',
    description: 'Khăn giấy ăn đã lau dầu mỡ, khăn giấy ướt chứa sợi nhân tạo.',
    treatment: 'Thu gom vào hệ thống rác còn lại để chuyển đi chôn lấp hoặc đốt rác phát điện.',
    note: 'Không vứt khăn giấy ướt vào bồn cầu vì có thể gây tắc nghẽn hệ thống thoát nước.',
    tags: ['khan giay', 'khan giay uot', 'giay uot', 'giay an', 'rac con lai']
  },
  {
    id: 'hop-xop',
    name: 'Hộp xốp đựng đồ ăn',
    category: 'inorganic',
    categoryLabel: 'Rác còn lại',
    emoji: '🍱',
    description: 'Hộp xốp polystyrene (PS) dùng một lần dính dầu mỡ và thức ăn thừa.',
    treatment: 'Chuyển về hệ thống xử lý rác thải sinh hoạt thông thường.',
    note: 'Hộp xốp dính dầu rất khó làm sạch và không thể tái chế kinh tế. Nên hạn chế sử dụng.',
    tags: ['hop xop', 'xop', 'hop com', 'rac con lai']
  },
  {
    id: 'khau-trang-y-te',
    name: 'Khẩu trang y tế',
    category: 'inorganic',
    categoryLabel: 'Rác còn lại',
    emoji: '😷',
    description: 'Khẩu trang vải không dệt 3-4 lớp dùng một lần trong sinh hoạt.',
    treatment: 'Thu gom theo nhóm rác còn lại.',
    note: 'Nên cắt đứt dây đeo trước khi vứt để phòng tránh gây vướng các loài động vật hoang dã.',
    tags: ['khau trang', 'khau trang y te', 'y te', 'rac con lai']
  },
  {
    id: 'bong-den-huynh-quang',
    name: 'Bóng đèn huỳnh quang',
    category: 'hazardous',
    categoryLabel: 'Rác nguy hại',
    emoji: '💡',
    description: 'Bóng đèn tuýp, bóng đèn compact hỏng chứa hơi thủy ngân và bột huỳnh quang.',
    treatment: 'Thu gom riêng biệt và gửi đến cơ sở tiếp nhận chất thải nguy hại.',
    note: 'Tuyệt đối không đập vỡ bóng đèn để tránh phát tán thủy ngân độc hại ra không khí.',
    tags: ['bong den', 'den huynh quang', 'compact', 'thuy ngan', 'nguy hai']
  },
  {
    id: 'vo-banh-snack',
    name: 'Vỏ túi bánh snack',
    category: 'inorganic',
    categoryLabel: 'Rác còn lại',
    emoji: '🍿',
    description: 'Bao bì bim bim, bánh kẹo có màng nhựa ghép mạ kim loại tráng bạc.',
    treatment: 'Thu gom theo hệ thống rác thải còn lại.',
    note: 'Do cấu tạo từ nhiều lớp vật liệu khác nhau ép chặt, hiện chưa có giải pháp tái chế phổ thông.',
    tags: ['vo banh', 'snack', 'bim bim', 'tui banh', 'rac con lai']
  },
  {
    id: 'ba-tra-ca-phe',
    name: 'Bã trà và bã cà phê',
    category: 'organic',
    categoryLabel: 'Hữu cơ',
    emoji: '☕',
    description: 'Xác trà lá, bã cà phê phin giàu khoáng chất hữu cơ.',
    treatment: 'Ủ phân compost hoặc bón trực tiếp cho cây cảnh sân trường.',
    note: 'Gạn ráo nước trước khi thu gom hoặc đem phơi khô làm chất khử mùi tự nhiên.',
    tags: ['ba tra', 'ba ca phe', 'xac tra', 'ca phe', 'huu co']
  },
  {
    id: 'but-bi-het-muc',
    name: 'Bút bi hết mực',
    category: 'inorganic',
    categoryLabel: 'Rác còn lại',
    emoji: '🖊️',
    description: 'Vỏ bút bi bằng nhựa hỗn hợp gắn ngòi kim loại dính mực tồn dư.',
    treatment: 'Thu gom theo hệ thống rác còn lại.',
    note: 'Khuyến khích sử dụng bút bi có thể thay ruột mực để giảm thiểu rác thải nhựa học đường.',
    tags: ['but bi', 'but', 'ngoi but', 'rac con lai']
  },
  {
    id: 'thiet-bi-dien-tu',
    name: 'Thiết bị điện tử hỏng',
    category: 'hazardous',
    categoryLabel: 'Rác nguy hại',
    emoji: '🖱️',
    description: 'Chuột máy tính, tai nghe, dây sạc hỏng, bo mạch điện tử nhỏ.',
    treatment: 'Thu gom riêng và chuyển giao cho chương trình thu hồi rác điện tử (e-waste).',
    note: 'Không vứt cùng rác thông thường vì chứa chì và các kim loại nặng có thể rò rỉ ra môi trường.',
    tags: ['thiet bi dien tu', 'chuot may tinh', 'tai nghe', 'dien tu', 'e-waste', 'nguy hai']
  },
  {
    id: 'manh-sanh-su',
    name: 'Mảnh sành sứ vỡ',
    category: 'inorganic',
    categoryLabel: 'Rác còn lại',
    emoji: '🥣',
    description: 'Chén, đĩa, ly sành sứ đã qua nung nhiệt độ cao bị vỡ.',
    treatment: 'Thu gom theo nhóm rác còn lại để chuyển đi chôn lấp hợp vệ sinh.',
    note: 'Bọc nhiều lớp giấy báo hoặc bìa carton ghi chú "MẢNH VỠ" để bảo vệ an toàn cho người thu gom.',
    tags: ['manh sanh su', 'chen bat vo', 'dia vo', 'gom su', 'rac con lai']
  },
  {
    id: 'tui-nilon-ban',
    name: 'Túi nilon bẩn',
    category: 'inorganic',
    categoryLabel: 'Rác còn lại',
    emoji: '🛍️',
    description: 'Túi nilon mỏng đựng đồ ăn sáng dính dầu mỡ, nước sốt.',
    treatment: 'Thu gom theo hệ thống rác còn lại.',
    note: 'Túi nilon dính bẩn không thể tái chế kinh tế. Hãy hạn chế sử dụng túi nilon một lần.',
    tags: ['tui nilon', 'nilon', 'bich nilon', 'rac con lai']
  },
  {
    id: 'vo-trung',
    name: 'Vỏ trứng',
    category: 'organic',
    categoryLabel: 'Hữu cơ',
    emoji: '🥚',
    description: 'Vỏ trứng gà, trứng vịt giàu Canxi cacbonat (CaCO₃).',
    treatment: 'Xử lý bằng phương pháp ủ vi sinh hữu cơ hoặc nghiền bón cây.',
    note: 'Nghiền nhỏ vỏ trứng giúp đất tơi xốp và cây hấp thụ dinh dưỡng nhanh hơn.',
    tags: ['vo trung', 'trung', 'huu co']
  },
  {
    id: 'hop-sua-chua-nhua',
    name: 'Hộp sữa chua nhựa sạch',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '🍧',
    description: 'Hộp sữa chua bằng nhựa PP hoặc PS đã được tráng sạch cặn sữa.',
    treatment: 'Thu gom theo hệ thống tái chế nhựa phù hợp.',
    note: 'Cần tráng sạch cặn sữa bên trong để tránh nấm mốc và mùi chua.',
    tags: ['hop sua chua', 'sua chua', 'nhua pp', 'tai che']
  },
  {
    id: 'la-cay-san-truong',
    name: 'Lá cây và cỏ khô',
    category: 'organic',
    categoryLabel: 'Hữu cơ',
    emoji: '🍂',
    description: 'Lá bàng, lá phượng, cỏ khô quét dọn từ sân trường.',
    treatment: 'Thu gom ủ phân hữu cơ vi sinh bón cho bồn hoa, cây cảnh nhà trường.',
    note: 'Không tự ý đốt lá cây trong sân trường vì tạo ra nhiều khói bụi mịn độc hại.',
    tags: ['la cay', 'co kho', 'san truong', 'huu co']
  },
  {
    id: 'binh-xit-kim-loai',
    name: 'Bình xịt kim loại rỗng',
    category: 'recyclable',
    categoryLabel: 'Có khả năng tái chế',
    emoji: '🧴',
    description: 'Bình xịt phòng, bình xịt khử mùi bằng kim loại đã dùng hết hoàn toàn.',
    treatment: 'Thu gom theo luồng tái chế kim loại.',
    note: 'Đảm bảo bình đã xịt hết khí nén bên trong trước khi bỏ thùng tái chế; không đục thủng hay đốt bình.',
    tags: ['binh xit', 'chai xit', 'kim loai', 'tai che']
  },
  {
    id: 'nhiet-ke-thuy-ngan',
    name: 'Nhiệt kế thủy ngân hỏng',
    category: 'hazardous',
    categoryLabel: 'Rác nguy hại',
    emoji: '🌡️',
    description: 'Nhiệt kế y tế đo nhiệt độ cơ thể chứa kim loại lỏng thủy ngân.',
    treatment: 'Lưu giữ cẩn thận và chuyển giao cho trạm y tế hoặc cơ sở tiếp nhận chất thải y tế nguy hại.',
    note: 'Tuyệt đối không để rơi vỡ làm bay hơi thủy ngân độc hại vào không khí. Bọc trong hộp kín chuyên dụng.',
    tags: ['nhiet ke', 'thuy ngan', 'y te', 'nguy hai']
  }
];

