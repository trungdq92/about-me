# Plan Website Gioi Thieu Ban Than

## 1. Danh gia diem manh tu CV

### USP can dua len hero ngay

1. 12+ nam kinh nghiem phat trien phan mem
2. 8 nam kinh nghiem lead team va dieu phoi cong viec
3. Lam duoc tron vong doi du an: design, implementation, test, maintenance
4. Kinh nghiem lam viec voi khach hang Nhat va giao tiep nghiep vu bang tieng Nhat
5. Da tung tham gia nhieu domain: EC, bao hiem, IoT, san xuat

### Diem manh chuyen mon

- Tech stack co do sau va tinh thuc chien: C#, Java, JavaScript, ReactJS, SQL, .NET Core, Spring Boot, AWS
- Vua co backend/business system experience, vua co web, IoT, Android, game background
- Co kinh nghiem PL, PM, BrSE, member nen profile rat linh hoat
- Khong chi code, con tham gia requirement hearing, technical consultation, schedule control, team coordination

### Diem manh ve hinh anh ca nhan

- Hinh mau mot engineer "bridge" giua business va development
- Diem tu tin la su binh tinh, can trong, xu ly tot tinh huong gap
- Phu hop dinh vi thanh senior engineer / tech lead / bridge engineer cho thi truong Nhat

## 2. Dinh huong site

Khong nen lam theo kieu "CV dua nguyen len web". Nen lam thanh personal positioning site:

- Muc tieu 1: Trong 10 giay dau nguoi xem hieu ngay Trung la ai, manh o dau
- Muc tieu 2: Nhin thay ro profile senior + lead + Japan-facing
- Muc tieu 3: Sau do moi di sau vao experience, skill, project, contact

## 3. Thu tu uu tien noi dung

### Section 1: Hero

Can tra loi ngay 3 cau hoi:

- Ban la ai?
- Ban manh nhat o dau?
- Vi sao nen lien he ban?

Noi dung de xuat:

- Ten lon, ro rang
- Subtitle: Senior Software Engineer | Tech Lead | Japan Project Experience
- 3 den 4 stat cards:
  - 12+ years experience
  - 8 years leadership
  - End-to-end delivery
  - Japan-facing communication
- CTA:
  - View Experience
  - Contact Me

### Section 2: Core Value / Why Me

Section nay dung de "ban profile" thay vi liet ke ky nang.

4 card noi bat:

1. End-to-End Delivery
2. Leadership and Coordination
3. Japan Market Collaboration
4. Multi-domain Engineering

Moi card co 1 tieu de ngan + 1 mo ta 2 dong + 1 icon/visual cue.

### Section 3: Experience Snapshot

Khong nen show toan bo CV ngay. Truoc tien show tong quan:

- Projects across Manufacturing, IoT, Insurance, EC
- Roles: PM, PL, BrSE, Senior Engineer
- Main stacks by project clusters

Co the lam dang timeline ngang/doc co highlight cac moc:

- 2012-2014: Foundation in PHP, Java, game/mobile
- 2016-2018: Enterprise Java systems
- 2018-2022: ASP.NET / C# / bridge and lead roles
- 2022-now: Production systems, PL role, .NET Core

### Section 4: Selected Projects

Khong can dua tat ca du an len man hinh dau. Chon 4-6 project tieu bieu:

- Hoya
- Yoko
- EIS
- Rakuuru

Moi card nen co:

- Ten du an
- Domain
- Vai tro
- Tech stack
- Viec da dong gop
- 1 ket qua/anh huong neu viet lai duoc ro hon

### Section 5: Skills

Nhom lai de giam cam giac "qua nhieu keyword":

- Backend: C#, Java, .NET Core, Spring Boot
- Frontend: JavaScript, ReactJS
- Data: SQL Server, MySQL, PostgreSQL, Oracle, Redis
- Infra/Tools: AWS, Docker, Kubernetes, Git, PowerShell

Nen co "main stack" va "supporting stack" tach nhau de profile sang hon.

### Section 6: Working Style

Day la section can de tao khac biet:

- Calm under pressure
- Strong customer communication
- Requirement clarification and technical consulting
- Team atmosphere and schedule coordination

Co the dua case release pressure trong phan Self PR thanh mot quote block noi bat.

### Section 7: Certifications / Education / Languages

Section gon:

- JLPT N2
- Math Olympiad achievement
- Bachelor degree
- Japanese / English

### Section 8: Contact

Cuoi trang nen rat ro:

- Email
- Phone
- Optional download CV button

## 4. Visual direction de lam noi bat diem manh

### Concept

"Reliable senior engineer for Japan-facing products"

### Cam giac can truyen tai

- Chac chan
- Chuyen nghiep
- Thuc chien
- Tin cay
- Diem tinh

### Huong thiet ke

- Clean but strong
- Grid ro rang, spacing rong
- Typography nghiem tuc, hien dai
- Khong flashy startup style
- Nhan bang so lieu lon va timeline co trong tam

### Bang mau de xuat

- Navy dam / slate lam mau chinh
- Xanh ngoc hoac teal lam accent
- Nen sang am, khong trang tinh
- Mau nhan cho so lieu va CTA

Vi sao:

- Hop voi hinh anh on dinh, tin cay, lam enterprise systems
- Tranh cam giac qua tre hoac qua generic

## 5. Cac thanh phan UI nen co

- Hero co avatar + intro + metric cards
- Sticky nav scroll den section
- Timeline experience
- Project cards
- Skill chips / grouped tags
- Quote block cho Self PR
- Contact banner o cuoi

## 6. Motion va tuong tac

- Fade-up nhe khi scroll vao section
- Counter animation cho 12+, 8+, 4 domains
- Filter nho cho project theo domain hoac role neu can
- Active nav state theo section

Khong nen lam animation qua nhieu vi profile nay can su nghiem tuc.

## 7. Kien truc file cho ban HTML/CSS/JS pure

```text
/index.html
/assets/css/style.css
/assets/js/main.js
/assets/images/me.jpg
/assets/data/profile.js
```

Giai thich:

- `index.html`: skeleton section
- `style.css`: theme, layout, responsive
- `main.js`: nav, scroll reveal, counters, project filter
- `profile.js`: tach du lieu profile/project de de cap nhat

## 8. Lo trinh build

### Phase 1: Structure

- Tao khung one-page
- Chia section theo uu tien noi dung
- Dat content text tam thoi tu CV

### Phase 2: Visual system

- Chot mau, font, spacing, card, timeline
- Responsive desktop/tablet/mobile

### Phase 3: Interaction

- Sticky nav
- Scroll reveal
- Counter animation
- Project filter neu can

### Phase 4: Content polish

- Viet lai copy ngan gon, tu tin, huong positioning
- Chuan hoa tieng Viet hoac tieng Nhat tuy audience
- Kiem tra lai wording cong khai

### Phase 5: Final QA

- Kiem tra mobile
- Kiem tra hieu nang
- Kiem tra anh/avatar
- Kiem tra link lien he

## 9. Khuyen nghi truoc khi code

- Nen xac dinh audience chinh:
  - Nha tuyen dung Viet Nam
  - Cong ty Nhat
  - Client quoc te
- Neu muc tieu la cong ty Nhat, nen uu tien content tieng Nhat hoac song ngu
- Can viet lai mot so mo ta project thanh achievement-based thay vi task-based de site thuyet phuc hon

## 10. Ket luan

Website nen ban "vi the nghe nghiep" cua ban truoc, roi moi den CV chi tiet. Trong CV nay, thu manh nhat khong phai la danh sach skill, ma la su ket hop giua:

- Seniority 12+ nam
- Kinh nghiem lead va phoi hop team
- Nang luc lam viec voi khach hang Nhat
- Kha nang di tu requirement den release va maintenance

Do do, giao dien va content can xoay quanh hinh anh:

"Mot senior engineer dang tin cay, thuc chien, co kha nang dan dat va phoi hop tot trong cac du an huong thi truong Nhat."
