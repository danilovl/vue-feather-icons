const WifiOffIcon = {
    name: 'WifiOffIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('line', {x1: "1", y1: "1", x2: "23", y2: "23"}),
                    render('path', {d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"}),
                    render('path', {d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"}),
                    render('path', {d: "M10.71 5.05A16 16 0 0 1 22.58 9"}),
                    render('path', {d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"}),
                    render('path', {d: "M8.53 16.11a6 6 0 0 1 6.95 0"}),
                    render('line', {x1: "12", y1: "20", x2: "12", y2: "20"})
                ]
            )
        }
    }
}

export default WifiOffIcon
