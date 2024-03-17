const FileTextIcon = {
    name: 'FileTextIcon',
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
                    render('path', {d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),
                    render('polyline', {points: "14 2 14 8 20 8"}),
                    render('line', {x1: "16", y1: "13", x2: "8", y2: "13"}),
                    render('line', {x1: "16", y1: "17", x2: "8", y2: "17"}),
                    render('polyline', {points: "10 9 9 9 8 9"})
                ]
            )
        }
    }
}

export default FileTextIcon
