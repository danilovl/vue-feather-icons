const LogOutIcon = {
    name: 'LogOutIcon',
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
                    render('path', {d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),
                    render('polyline', {points: "16 17 21 12 16 7"}),
                    render('line', {x1: "21", y1: "12", x2: "9", y2: "12"})
                ]
            )
        }
    }
};

export default LogOutIcon;