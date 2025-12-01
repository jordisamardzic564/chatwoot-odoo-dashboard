(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx', file not found");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/api'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/LeadDetails'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/LeadPipeline'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ActionsPanel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/CreateLeadModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/card'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Dashboard() {
    _s();
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listen to Chatwoot events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            const handleMessage = {
                "Dashboard.useEffect.handleMessage": (event)=>{
                    if (typeof event.data !== 'string') return;
                    try {
                        const parsed = JSON.parse(event.data);
                        if (parsed.event !== 'appContext') return;
                        const contactData = parsed.data.contact;
                        if (contactData) {
                            setContact({
                                id: contactData.id,
                                name: contactData.name,
                                email: contactData.email,
                                phone_number: contactData.phone_number,
                                custom_attributes: contactData.custom_attributes
                            });
                        }
                    } catch (e) {
                        console.error("Error parsing Chatwoot event", e);
                    }
                }
            }["Dashboard.useEffect.handleMessage"];
            window.addEventListener('message', handleMessage);
            // Request context
            window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');
            return ({
                "Dashboard.useEffect": ()=>window.removeEventListener('message', handleMessage)
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], []);
    // Fetch Odoo Lead
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'lead',
            contact?.id
        ],
        queryFn: {
            "Dashboard.useQuery": ()=>fetchLeadByContactId(contact.id)
        }["Dashboard.useQuery"],
        enabled: !!contact?.id
    });
    if (!contact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    className: "flex flex-col items-center justify-center p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "mb-4 h-8 w-8 animate-spin text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Wachten op Chatwoot data..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto max-w-3xl p-4 space-y-6 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold",
                        children: "Sales Command Center"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            "Chatwoot ID: ",
                            contact.id
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-8 w-8 animate-spin text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "border-red-200 bg-red-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    className: "flex items-center p-4 text-red-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "mr-2 h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        "Fout bij laden van Odoo data."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            !isLoading && !error && !data?.lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    className: "flex flex-col items-center justify-center p-8 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold",
                            children: "Geen Odoo lead gevonden"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-muted-foreground",
                            children: "Dit contact is nog niet gekoppeld aan een Odoo lead."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            onClick: ()=>setIsCreateModalOpen(true),
                            children: "Maak of Koppel Lead"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            !isLoading && data?.lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardHeader, {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                            children: data.lead.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "ID: ",
                                                data.lead.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadPipeline, {
                                    lead: data.lead
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardHeader, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                    className: "text-base",
                                    children: "Lead Details"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadDetails, {
                                    lead: data.lead
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionsPanel, {
                                lead: data.lead
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 132,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 131,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateLeadModal, {
                isOpen: isCreateModalOpen,
                onClose: ()=>{
                    setIsCreateModalOpen(false);
                    refetch();
                },
                contact: contact
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "TjO6udVYrMqFAZej/GhcP2DVcMY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_github_chatwoot-odoo-dashboard_src_b1f1be5d._.js.map